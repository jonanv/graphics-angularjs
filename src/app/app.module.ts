import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

// Imports components
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
