import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
declare var breakpoints: any;
declare var browser: any;
@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.initialize();
  }

  initialize() {
    let $window = $(window);
    let $head = $('head');
    let $body = $('body');

    // Dropdowns.
    $('#nav > ul').dropotron({
      mode: 'fade',
      noOpenerFade: true,
      alignment: 'center'
    });

    // Nav.

    // Title Bar.
    $(
      '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '</div>'
    )
      .appendTo($body);

    // Panel.
    $(
      '<div id="navPanel">' +
      '<nav>' +
      $('#nav').navList() +
      '</nav>' +
      '</div>'
    )
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'navPanel-visible'
      });
  }
}
