import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersListComponentComponent } from './components/characters-list-component/characters-list-component.component';
import { provideHttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
