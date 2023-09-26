import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-categorie',
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.scss']
})
export class NouvelCategorieComponent implements OnInit{
constructor(
  private router:Router
) {
}
ngOnInit() {
}

  cancel():void {
    this.router.navigate(['/dashbord/categories'])
  }
}
