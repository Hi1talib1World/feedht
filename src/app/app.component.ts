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
  dark = false;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'FEED',
      url: '/folder',
      icon: 'home'
    },
    {
      title: 'Videos',
      url: '/folder/Inbox',
      icon: 'time'
    },
    {
      title: 'Messages',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Profile Settings',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Groups',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'About'
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
