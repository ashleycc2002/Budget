import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [
    `
     * {
        margin:15px;
     }
    `
  ]
})
export class DashboardComponent implements OnInit {

  namespotify:string='App Spotify';
  linkspotify:string='https://awesome-booth-023b96.netlify.app';
  namelink:string ="Spotify"

  namefotos:string='App Photo';
  linkfotos:string='https://distracted-blackwell-7b463a.netlify.app';
  namelink1:string='Photos'

  namemapas:string='App Maps';
  linkmapas:string='https://elastic-kowalevski-dcf629.netlify.app';
  namelink2:string='Maps'

  namepaises:string= 'App Country';
  linkpaises:string='https://tender-rosalind-892325.netlify.app';
  namelink3:string='Countries'

  namegift:string='App Gifs';
  linkgift:string='https://loving-joliot-871910.netlify.app';
  namelink4:string='Gifs';


  slides = [{'image': 'assets/img/demos/nature-1.jpg','name':this.namespotify, 'link':this.linkspotify, 'namelink':this.namelink},
  {'image': 'assets/img/demos/nature-2.jpg', 'name':this.namefotos, 'link':this.linkfotos, 'namelink':this.namelink1},
  {'image': 'assets/img/demos/nature-3.jpg', 'name':this.namemapas, 'link':this.linkmapas, 'namelink':this.namelink2},
  {'image': 'assets/img/demos/nature-4.jpg', 'name':this.namepaises,'link':this.linkpaises,'namelink':this.namelink3},
  {'image': 'assets/img/demos/nature-5.jpg', 'name':this.namegift, 'link':this.linkgift, 'namelink':this.namelink4},
  {'image': 'assets/img/demos/nature-6.jpg', 'name':this.namegift, 'link':this.linkgift, 'namelink':this.namelink},
  ];

  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router,
               private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
      this.router.navigateByUrl('/auth/login');
      this.authService.logout();
  }

}
