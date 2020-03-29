import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  display = 'none';
  constructor() { }

  ngOnInit() {

  }

  public goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll')
  showTopButton() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}
