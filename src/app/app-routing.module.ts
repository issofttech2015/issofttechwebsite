import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Features', component: FeaturesComponent },
  // { path: 'Works', component: PortfolioComponent },
  // { path: 'Pricing', component: PricingComponent },
  // { path: 'Team', component: TeamComponent },
  { path: 'Subscribe', component: SubscribeComponent },
  // { path: 'Blog', component: BlogComponent },
  { path: 'ContactUs', component: ContactComponent },
  { path: '**', redirectTo: '/Home' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
