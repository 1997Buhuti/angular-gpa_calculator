import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { WelcomeImageComponent } from './components/welcome-image/welcome-image.component';
import { GpaTableComponent } from './components/gpa-table/gpa-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    WelcomeImageComponent,
    GpaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
