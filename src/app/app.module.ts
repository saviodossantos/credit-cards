import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardOneComponent } from './components/credit-card-one/credit-card-one.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionInitialComponent } from './components/section-initial/section-initial.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardOneComponent,
    HeaderComponent,
    SectionInitialComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
