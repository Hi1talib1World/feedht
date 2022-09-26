import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }
    
  }

  

  dark = false;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Feed',
      url: '/feed',
      icon: 'home'
    },
    {
      title: 'Videos',
      url: '/videos',
      icon: 'time'
    },
    {
      title: 'Messages',
      url: '/messages',
      icon: 'paper-plane'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'heart'
    },
    {
      title: 'Friends',
      url: '/friends',
      icon: 'friend'
    },
    {
      title: 'Groups',
      url: '/folder/Groups',
      icon: 'trash'
    },
    {
      title: 'Notification',
      url: '/notification',
      icon: 'Notification'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    
    
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.splashScreen.hide();
    });
  }



  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
