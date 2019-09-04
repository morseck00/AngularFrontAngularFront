import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AjoutPartenaireComponent } from './components/ajout-partenaire/ajout-partenaire.component';
import { ListePartenaireComponent } from './components/liste-partenaire/liste-partenaire.component';
import { AjoutCaissierComponent } from './components/ajout-caissier/ajout-caissier.component';
import { ListeUtilisateurComponent } from './components/liste-utilisateur/liste-utilisateur.component';
const routes: Routes = [
  { path:'Login',component:LoginComponent},
  { path:'AjoutPartenaire',component:AjoutPartenaireComponent},
  { path:'AjoutPartenaire',component:AjoutPartenaireComponent},
  { path:'AjoutCaissier',component:AjoutCaissierComponent},
  { path:'ListePartenaire',component:ListePartenaireComponent},
  { path:'ListeUtilisateur',component:ListeUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
