import { Component } from '@angular/core';
import { DataService } from './dataservice.service';

@Component({
  selector: 'app-scomponent1',
  template: `    <h1>Component 1</h1>
    <input type="text" [(ngModel)]="message">
    <button (click)="sendMessage()">Send Message</button>
    <app-component2>/</app-component2>`
  
})
export class SComponentOne {
  message: string="";

  constructor(private dataService: DataService) { }

  sendMessage() {
    this.dataService.setData(this.message);
  }
}
