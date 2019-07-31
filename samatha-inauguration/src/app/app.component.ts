import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
declare var TweenMax: any;
import { Power2, Back, Expo } from 'gsap/all';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'samatha-inauguration';
  @ViewChild('overlay', { static: true }) overlay: ElementRef;
  @ViewChild('overlay1', { static: true }) overlay1: ElementRef;
  @ViewChild('overlay2', { static: true }) overlay2: ElementRef;
  @ViewChild('button', { static: true }) button: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.animate();
  }

  animate() {
    TweenMax.to(this.button.nativeElement, 1, {
      y: -100,
      opacity: 0
    });
    TweenMax.to(this.overlay.nativeElement, 2, {
      y: - 400,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1
    });
    TweenMax.to(this.overlay1.nativeElement, 2, {
      y: - 400,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 2
    });
    TweenMax.to(this.overlay2.nativeElement, 2, {
      y: - 800,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 3
    });
    setInterval(() => {
      document.location.href = 'http://www.samathabooks.com';
    }, 4000);
  }

}
