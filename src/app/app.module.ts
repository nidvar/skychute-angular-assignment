import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentAppOneComponent } from './parent-app-one/parent-app-one.component';
import { ChildAppOneComponent } from './parent-app-one/child-app-one/child-app-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentAppOneComponent,
    ChildAppOneComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
