import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Menu1AboutusComponent } from './menu1-aboutus/menu1-aboutus.component';
import { Menu2AboutusComponent } from './menu2-aboutus/menu2-aboutus.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'aboutus', component: AboutusComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'about-us-menu-1', component: Menu1AboutusComponent },
			{ path: 'about-us-menu-2', component: Menu2AboutusComponent }
		]
	},
	{ path: 'news', component: NewsComponent },
	{ path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
