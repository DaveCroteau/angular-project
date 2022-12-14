import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Components imports
import { HomeComponent } from './pages/home/home.component'
import { PostsComponent } from './pages/posts/posts.component'
import { AboutComponent } from './pages/about/about.component'

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', component: HomeComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
