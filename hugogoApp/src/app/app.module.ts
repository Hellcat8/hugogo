import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/user/top-bar/top-bar.component';
import { FooterComponent } from './Modules/user/footer/footer.component';
import { HomeComponent } from './Modules/user/home/home.component';
import { ArticlesComponent } from './Modules/user/articles/articles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgrammesComponent } from './Modules/user/programmes/programmes.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      FooterComponent,
      HomeComponent,
      ArticlesComponent,
      ProgrammesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ApiAuthorizationModule,
      AppRoutingModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
