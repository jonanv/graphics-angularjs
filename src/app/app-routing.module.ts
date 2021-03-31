import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';

const routes: Routes = [
  { path: 'line', component: LineComponent },
  { path: 'bar', component: BarComponent },
  { path: 'doughnut', component: DoughnutComponent },

  // Default
  { path: '**', pathMatch: 'full', redirectTo: 'line' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
