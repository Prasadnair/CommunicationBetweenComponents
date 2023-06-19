import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IOParentComponent} from './ioparent.component';
import { IOChildComponent } from './iochild.component';
import { DataService } from './ServiceCommunication/dataservice.service';
import { SComponentOne} from './ServiceCommunication/scomponentone.component';
import { SComponentTwo } from './ServiceCommunication/scomponenttwo.component';

@NgModule({
  declarations: [
    AppComponent,
    IOParentComponent,
    IOChildComponent,
    SComponentOne,
    SComponentTwo
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
