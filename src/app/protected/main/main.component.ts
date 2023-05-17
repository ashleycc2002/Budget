import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {
  scrollTop!: number;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {

   
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e:any) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });


   
    $(window).resize(function() {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      };
    });

    
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', (e: any) => {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });


    $(document).on('scroll', () => {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

   
    $(document).on('click', 'a.scroll-to-top', (e:any) => {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });

  }

  get usuario() {
    return this.authService.usuario;
  }
  
  logout(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
}



}
