import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-changer-mod-pass',
  templateUrl: './changer-mod-pass.component.html',
  styleUrls: ['./changer-mod-pass.component.scss']
})
export class ChangerModPassComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/dashbord/profil']);
  }
}
