import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit{


  origin='';
constructor(
  private router:Router,
  private activatedRoute:ActivatedRoute,
) {
}
ngOnInit() :void{
  this.activatedRoute.data.subscribe(data=>{
    this.origin = data['origin']
  });
}

  cancelClick():void  {
   if(this.origin === 'client'){
 this.router.navigate(['/dashbord/client']);
   }else if(this.origin ==='fournisseur'){
     this.router.navigate(['/dashbord/fournisseur']);
   }
  }

  saveClick() :void{
  }
}
