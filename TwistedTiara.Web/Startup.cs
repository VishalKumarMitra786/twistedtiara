using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TwistedTiara.Web.Data;
using TwistedTiara.Web.Models;
using TwistedTiara.Web.Services;
using TwistedTiara.Web.Models.GoogleModels;
using TwistedTiara.Web.Models.Globals;
using AutoMapper;
using TwistedTiara.Web.Models.PostModels;

namespace TwistedTiara.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<GoogleAuthenticationSettings>(Configuration.GetSection(nameof(GoogleAuthenticationSettings)));

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            var googleSettings = Configuration.GetSection(nameof(GoogleAuthenticationSettings));
            var googleSettingsClientId = googleSettings[nameof(GoogleAuthenticationSettings.ClientId)];
            var googleSettingsClientSecretKey = googleSettings[nameof(GoogleAuthenticationSettings.ClientSecretKey)];
            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddAuthentication().AddGoogle(google =>
            {
                google.ClientId = googleSettingsClientId;
                google.ClientSecret = googleSettingsClientSecretKey;
            });

            var configuration = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ApplicationUser, ApplicationUserAc>().ReverseMap();
                cfg.CreateMap<Post, PostAc>().ReverseMap();
            });
            configuration.CreateMapper();
            services.AddCors();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseCors(x => x
               .AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials());

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                //routes.MapRoute(
                //    name: "post",
                //    template: "api/{controller=Post}/{*path}");
                routes.MapRoute(
                    name: "spa-fallback",
                    template: "{*url}",
                    defaults: new { controller = "Home", action = "Index" });
            });

            using (var scope = app.ApplicationServices.CreateScope())
            {
                var db = scope.ServiceProvider.GetService<ApplicationDbContext>();
                db.Database.Migrate();
                // Create roles
                CreateRoles(scope.ServiceProvider).Wait();
            }
        }

        private async Task CreateRoles(IServiceProvider serviceProvider)
        {
            //initializing custom roles 
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            string[] roleNames = Constants.Roles;
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    //create the roles and seed them to the database
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
        }
    }
}
