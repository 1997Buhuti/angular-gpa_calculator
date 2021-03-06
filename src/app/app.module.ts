import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from "angular-datatables";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponentComponent} from './components/header-component/header-component.component';
import {WelcomeImageComponent} from './components/welcome-image/welcome-image.component';
import {GpaTableComponent} from './components/gpa-table/gpa-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { GpaDisplayComponent } from './components/gpa-display/gpa-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    WelcomeImageComponent,
    GpaTableComponent,
    FooterComponent,
    GpaDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
