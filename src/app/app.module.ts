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

import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {FooterComponent} from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
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
