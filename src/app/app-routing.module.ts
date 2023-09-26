import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {MenuComponent} from "./menu/menu.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composant/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelCmdCltFrsComponent} from "./composant/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component";
import {PageCategorieComponent} from "./pages/categories/page-categories/page-categorie.component";
import {NouvelCategorieComponent} from "./composant/nouvel-categorie/nouvel-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateurs/page-utilisateur/page-utilisateur.component";
import {DetailUtilisateurComponent} from "./composant/detail-utilisateur/detail-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerModPassComponent} from "./pages/profil/changer-mod-pass/changer-mod-pass.component";


const routes: Routes = [
  {path:'',redirectTo:'page-login',pathMatch:'full'},
  {path:'login',component:PageLoginComponent},
  {path:'signup',component:SignupComponent},
  {
    path: 'dashbord',
    component: MenuComponent,
    children: [
      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'nouvelarticle',
        component:NouvelArticleComponent,
      },
      {
        path: 'mvtstk',
        component:PageMvtstkComponent,
      },
      {
        path: 'client',
        component:PageClientComponent,
      },
      {
        path: 'nouveauclient',
        component:NouveauCltFrsComponent,
        data:{
          origin:'client'
        }
      },
      {
        path: 'commandeclient',
        component:PageCmdCltFrsComponent,
        data:{
          origin:'client'
        }
      },
      {
        path: 'nouvelcommandeclt',
        component:NouvelCmdCltFrsComponent,
        data:{
          origin:'client'
        }
      },

      {
        path: 'fournisseur',
        component:PageFournisseurComponent,
      },
      {
        path: 'nouveaufournisseur',
        component:NouveauCltFrsComponent,
        data:{
          origin:'fournisseur'
        }
      },
      {
        path: 'nouvelcommandefrs',
        component:NouvelCmdCltFrsComponent,
        data:{
          origin:'fournisseur'
        }
      },
      {
        path: 'commandefournisseur',
        component:PageCmdCltFrsComponent,
        data:{
          origin:'fournisseur'
        }
      },
      {
        path: 'categories',
        component:PageCategorieComponent,
      },
      {
        path: 'nouvellecategorie',
        component:NouvelCategorieComponent,
      },
      {
        path: 'utilisateurs',
        component:PageUtilisateurComponent,
      },
      {
        path: 'nouvelutilisateur',
        component:NouvelUtilisateurComponent,
      },
      {
        path: 'profil',
        component:PageProfilComponent,
      },
      {
        path: 'changerpass',
        component:ChangerModPassComponent,
      },
  ]}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
