import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-cmd-clt-frs',
  templateUrl: './nouvel-cmd-clt-frs.component.html',
  styleUrls: ['./nouvel-cmd-clt-frs.component.scss']
})
export class NouvelCmdCltFrsComponent implements OnInit{
  origin='';
constructor(
  private router:Router,
  private activatedRoute:ActivatedRoute,
) {
}
 ngOnInit():void {
   this.activatedRoute.data.subscribe(data=>{
     this.origin = data['origin']
   });
}

  cancelClick():void {
if(this.origin ==='client'){
  this.router.navigate(['/dashbord/commandeclient']);
} else if(this.origin ==='fournisseur'){
  this.router.navigate(['/dashbord/commandefournisseur']);
}
  }

  saveClick():void {
  }
}
