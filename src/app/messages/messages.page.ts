import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class MessagesPage implements OnInit {

  segment: string = 'message';

  constructor() { }

  ngOnInit() {
  }

}