import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ThemeService } from './services/theme.service';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  providers:    [ ThemeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
