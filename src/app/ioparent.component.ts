import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
    <input [(ngModel)]="parentMessage"/>
    <p>{{ childMessage }}</p>
    <app-child [message]="parentMessage" (notify)="onNotify($event)"></app-child>`
  
})
export class IOParentComponent {
  parentMessage = 'Message from parent';
  childMessage ="";
  onNotify(message: string) {
    this.childMessage =message;
  }
}
