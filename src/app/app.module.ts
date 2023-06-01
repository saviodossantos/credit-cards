import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardOneComponent } from './components/credit-card-one/credit-card-one.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionInitialComponent } from './components/section-initial/section-initial.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardOneComponent,
    HeaderComponent,
    SectionInitialComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
