import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {
 @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

// ─────────────────────────────────────────────────────────────────────────────
  verArtista(item: any){
    let artistaID;

    if (item.type === 'album') {
        artistaID = item.artists[0].id;
    }else {
      artistaID = item.id;
    }

    this.router.navigate(['/artist', artistaID]);
  }

// ─────────────────────────────────────────────────────────────────────────────

}
