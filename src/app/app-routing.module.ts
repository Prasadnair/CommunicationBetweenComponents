import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IOParentComponent } from './ioparent.component';
import { IOChildComponent } from './iochild.component';
import { SComponentOne} from './ServiceCommunication/scomponentone.component';
import { SComponentTwo} from './ServiceCommunication/scomponenttwo.component';
const routes: Routes = [
  { path: '', redirectTo: '/parent-child', pathMatch: 'full' },
  { path: 'parent-child', component: IOParentComponent },
  { path: 'services', component: SComponentOne },
  // { path: 'event-emitters', component: undefined },
 // { path: 'rxjs-observables', component: SComponentTwo }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
