import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foirfe';
  mobile: boolean = false;
  links = [
    {
      'text': 'What We Do?',
      'link': 'what',
      'icon': 'what'
    },
    {
      'text': 'About Us',
      'link': 'about',
      'icon': 'about'
    },
    {
      'text': 'Resources',
      'link': 'resources',
      'icon': 'resources'
    },
    {
      'text': 'Contact Us',
      'link': 'contact',
      'icon': 'contact'
    }
  ];
  activeLink = '';
  showFiller = false;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    let url = window.location.href;
    this.activeLink = url.substring(url.lastIndexOf("/") + 1)
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    }
  }

  // @HostListener("window:scroll", []) onWindowScroll() {
  //   this.scrollFunction();
  // }
  // // When the user scrolls down 20px from the top of the document, show the button
  // scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         document.getElementById("myBtn").style.display = "block";
  //     } else {
  //         document.getElementById("myBtn").style.display = "none";
  //     }
  // }

  // // When the user clicks on the button, scroll to the top of the document
  // topFunction() {
  //     document.body.scrollTop = 0; // For Safari
  //     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // } 
}
