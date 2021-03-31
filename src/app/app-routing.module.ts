import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';

const routes: Routes = [
  { path: 'line', component: LineComponent },
  { path: 'bar', component: BarComponent },

  // Default
  { path: '**', pathMatch: 'full', redirectTo: 'line' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
