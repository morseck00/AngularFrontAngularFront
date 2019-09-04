import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AjoutCaissierComponent } from './components/ajout-caissier/ajout-caissier.component';
import { AjoutPartenaireComponent } from './components/ajout-partenaire/ajout-partenaire.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListePartenaireComponent } from './components/liste-partenaire/liste-partenaire.component';
import { ListeUtilisateurComponent } from './components/liste-utilisateur/liste-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjoutCaissierComponent,
    AjoutPartenaireComponent,
    ListePartenaireComponent,
    ListeUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
