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

  constructor(public navCtrl: NavController, public zone: NgZone,public db: AngularFireOfflineDatabase,public toastCtrl: ToastController,public platform: Platform, public actionSheetCtrl: ActionSheetController,private camera: Camera, private transfer: Transfer, private file: File, private filePath:FilePath,public auth:Auth,public pro:Profile,public navParams: NavParams, public formBuilder: FormBuilder,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.modi=false;
    this.hidebutton=false;
    this.gene=true;
    this.male1=false;
    this.female1=false;
    this.ifmodi = true;
   }

  ngOnInit() {
  }

}
