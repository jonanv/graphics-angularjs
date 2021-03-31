import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

// Imports components
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent
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
