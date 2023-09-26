import {AfterViewInit, Component, OnInit} from '@angular/core';
import  'jquery';
import 'bootstrap';

 // Importez jQuery pour pouvoir l'utiliser
@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Utilisez $ de cette manière
    (<any>$('#exampleModal')).modal('show');
  }



}
