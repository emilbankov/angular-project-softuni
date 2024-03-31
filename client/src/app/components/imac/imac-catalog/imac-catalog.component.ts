import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-imac-catalog',
  templateUrl: './imac-catalog.component.html',
  styleUrls: ['./imac-catalog.component.css']
})
export class iMacCatalogComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getImacs().subscribe((imacs) => {
      console.log(imacs);
    })
  }

  // ngOnInit(): void {
  //   this.api.getImacs().subscribe((imacs) => {
  //     console.log(imacs);
  //   })
  // }
}
