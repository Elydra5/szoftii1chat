import { Component, Input, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {

  @Input() messages: any;

  constructor() { }

  ngOnInit() {}

  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
  }

  handleScrollEnd() {
    console.log('scroll end');
  }

}
