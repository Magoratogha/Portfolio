import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MessageService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
