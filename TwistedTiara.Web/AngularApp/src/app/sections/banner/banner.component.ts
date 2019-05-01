import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'tt-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: any = new Array<any>();
  constructor() { }

  ngOnInit() {
    let image1: IImage = {
      url: './images/pic10.jpg',
      caption: 'Women Empowerment'
    }

    let image2: IImage = {
      url: './images/pic03.jpg',
      caption: 'Super Girl'
    }

    let image3: IImage = {
      url: './images/pic01.jpg',
      caption: 'Beauty & Elegance'
    }

    this.images.push(image1);
    this.images.push(image2);
    this.images.push(image3);
  }

}
