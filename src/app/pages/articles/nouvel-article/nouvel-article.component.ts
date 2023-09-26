import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{
constructor(
  private router:Router
) {
}
ngOnInit() {
}



  saveClick() :void{
  }

  cancel():void {
 this.router.navigate(['/dashbord/articles']);
  }
}
