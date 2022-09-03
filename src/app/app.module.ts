// Modules imports.
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// Pipes imports.
import { TranslatePipe } from './pipes/translate.pipe'

// Components imports.
import { AppComponent } from './app.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { TopbarComponent } from './components/topbar/topbar.component'

// Pages components imports.
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'

@NgModule({
	declarations: [AppComponent, SidebarComponent, TopbarComponent, HomeComponent, AboutComponent, TranslatePipe],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
