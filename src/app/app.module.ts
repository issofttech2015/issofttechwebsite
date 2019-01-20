import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 3rd party
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule ,AngularFirestore } from 'angularfire2/firestore';

//

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { CounterComponent } from './counter/counter.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { CtaComponent } from './cta/cta.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

import { firebaseConfig } from './firebase/config';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FeaturesComponent,
    ServicesComponent,
    PortfolioComponent,
    PricingComponent,
    CounterComponent,
    TestimonialComponent,
    TeamComponent,
    SubscribeComponent,
    BlogComponent,
    ClientsComponent,
    FooterComponent,
    MapComponent,
    HeaderComponent,
    ContactComponent,
    CtaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
