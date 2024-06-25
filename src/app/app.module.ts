import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule, // one way binding typecsript'teki değişikliği html'e yazdırırken, two way binding çift taraflı değişiklik yansıtmayı sağlar.
    FormsModule //; two way binding yapabilmek için bunu eklememiz lazım çünkü Angular temelde one way binding sağlar.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
