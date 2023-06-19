import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <p>{{ message }}</p>
    <input [(ngModel)]="childMessage"/>
    <button (click)="notifyParent()">Notify Parent</button>
  `
})
export class IOChildComponent {
  @Input() message: string ='';
  @Output() notify = new EventEmitter<string>();
  childMessage: string ='Message from child';
  notifyParent() {
   
    this.notify.emit(this.childMessage);
  }
}
