using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TwistedTiara.Web.Data;
using TwistedTiara.Web.Models.PostModels;

namespace TwistedTiara.Web.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public PostController(ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("list/all")]
        public async Task<OkObjectResult> allList()
        {
            var listOfPosts = await _context.Posts.ToListAsync();
            return Ok(listOfPosts);
        }

        [HttpGet("list/deleted")]
        public async Task<OkObjectResult> DeletedList()
        {
            var listOfPosts = await _context.Posts.Where(x => x.IsDeleted).ToListAsync();
            return Ok(listOfPosts);
        }

        [HttpGet("list/published")]
        public async Task<OkObjectResult> ActiveList()
        {
            var listOfPosts = await _context.Posts.Where(x => !x.IsDeleted && x.IsActive).ToListAsync();
            return Ok(listOfPosts);
        }

        [HttpGet("list/drafts")]
        public async Task<OkObjectResult> InActiveList()
        {
            var listOfPosts = await _context.Posts.Where(x => !x.IsDeleted && !x.IsActive && !x.IsInReview).ToListAsync();
            return Ok(listOfPosts);
        }

        [HttpGet("list/inreview")]
        public async Task<OkObjectResult> InReviewList()
        {
            var listOfPosts = await _context.Posts.Where(
                x => !x.IsDeleted && !x.IsActive && x.IsInReview).ToListAsync();
            return Ok(listOfPosts);
        }

        [HttpGet("{id}")]
        public async Task<OkObjectResult> Get(string id)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(
                x => x.Id.ToString() == id);
            return Ok(post);
        }

        [HttpPost("create")]
        public async Task<OkObjectResult> Create(Post post)
        {
            post.CreatedAt = DateTime.UtcNow;
            post.UpdatedAt = DateTime.UtcNow;
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            var postToSend = _mapper.Map<PostAc>(post);
            return Ok(postToSend);
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(Post post)
        {
            var postToUpdate = await _context.Posts.FirstOrDefaultAsync(
                x => x.Id == post.Id);
            if (postToUpdate == null)
            {
                return BadRequest();
            }
            postToUpdate.Content = post.Content;
            postToUpdate.Title = post.Title;
            postToUpdate.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            var postToSend = _mapper.Map<PostAc>(postToUpdate);
            return Ok(postToSend);
        }

        [HttpPost("publish/{id}")]
        public async Task<IActionResult> Publish(string id)
        {
            var postToUpdate = await _context.Posts.FirstOrDefaultAsync(
                x => x.Id.ToString() == id);
            if (postToUpdate == null)
            {
                return BadRequest();
            }
            postToUpdate.IsActive = true;
            postToUpdate.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            var postToSend = _mapper.Map<PostAc>(postToUpdate);
            return Ok(postToSend);
        }

        [HttpDelete("delete/hard/{id}")]
        public async Task<IActionResult> HardDelete(string id)
        {
            var postToDelete = await _context.Posts.FirstOrDefaultAsync(
                x => x.Id.ToString() == id);
            if (postToDelete == null)
            {
                return BadRequest();
            }
            _context.Posts.Remove(postToDelete);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("delete/soft/{id}")]
        public async Task<IActionResult> SoftDelete(string id)
        {
            var postToDelete = await _context.Posts.FirstOrDefaultAsync(
                x => x.Id.ToString() == id);
            if (postToDelete == null)
            {
                return BadRequest();
            }

            postToDelete.IsDeleted = true;
            postToDelete.DeletedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}