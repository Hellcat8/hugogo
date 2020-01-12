import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './Modules/user/articles/articles.component';
import { HomeComponent } from './Modules/user/home/home.component';
import { ProgrammesComponent } from './Modules/user/programmes/programmes.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'articles', component: ArticlesComponent },
{ path: 'programmes', component: ProgrammesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
