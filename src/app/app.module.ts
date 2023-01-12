// Modules imports.
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http'

// Pipes imports.
import { TranslatePipe } from './pipes/translate.pipe'

// Pages components imports.
import { HomeComponent } from './pages/home/home.component'
import { PostsComponent } from './pages/posts/posts.component'
import { AboutComponent } from './pages/about/about.component'

// Components imports.
import { AppComponent } from './app.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
	declarations: [AppComponent, SidebarComponent, TopbarComponent, HomeComponent, AboutComponent, TranslatePipe, CardComponent, PostsComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
