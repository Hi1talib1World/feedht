import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  fbava:any;
  id:any;
modi:boolean;
ifmodi:boolean;
hidebutton:boolean;
name:any;
data:AfoObjectObservable<any>;
img:any;
 loading: Loading;
pic:any;
ava:any;
sex:any;
male1:boolean;
female1:boolean;
stat:any;
gene:boolean;

  constructor() { }

  ngOnInit() {
  }

}
