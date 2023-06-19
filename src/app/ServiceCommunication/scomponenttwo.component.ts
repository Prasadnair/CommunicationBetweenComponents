import { Component } from '@angular/core';
import { DataService } from './dataservice.service';

@Component({
  selector: 'app-component2',
  template: `
    <h1>Component 2</h1>
    <p>{{ receivedMessage }}</p>
  `
})
export class SComponentTwo {
  receivedMessage: string ='';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(message => {
      this.receivedMessage = message;
    });
  }
}
