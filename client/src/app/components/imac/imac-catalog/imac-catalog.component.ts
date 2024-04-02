import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { iMac } from 'src/app/types/imac';

@Component({
  selector: 'app-imac-catalog',
  templateUrl: './imac-catalog.component.html',
  styleUrls: ['./imac-catalog.component.css']
})
export class iMacCatalogComponent implements OnInit {
  imacs: iMac[] | null = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllImacs().subscribe((imacs) => {
      this.imacs = imacs;
    })
  }
}
