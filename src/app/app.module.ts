import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {CommonModule} from "@angular/common";
import { MenuComponent } from './menu/menu.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composant/detail-article/detail-article.component';
import { PaginationComponent } from './composant/pagination/pagination.component';
import { BouttonActionComponent } from './composant/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composant/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composant/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composant/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composant/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composant/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composant/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelCmdCltFrsComponent } from './composant/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categories/page-categories/page-categorie.component';
import { NouvelCategorieComponent } from './composant/nouvel-categorie/nouvel-categorie.component';
import { DetailUtilisateurComponent } from './composant/detail-utilisateur/detail-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateurs/page-utilisateur/page-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerModPassComponent } from './pages/profil/changer-mod-pass/changer-mod-pass.component';
import {NouvelUtilisateurComponent} from "./pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    SignupComponent,
    MenuComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelCmdCltFrsComponent,
    PageCategorieComponent,
    NouvelCategorieComponent,
    DetailUtilisateurComponent,
    PageUtilisateurComponent,
    PageProfilComponent,
    ChangerModPassComponent,
    NouvelUtilisateurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
