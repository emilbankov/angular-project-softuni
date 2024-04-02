import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import iPad from 'src/app/types/ipad';

@Component({
  selector: 'app-ipad-catalog',
  templateUrl: './ipad-catalog.component.html',
  styleUrls: ['./ipad-catalog.component.css']
})
export class iPadCatalogComponent implements OnInit {
  ipads: iPad[] | null = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllIpads().subscribe((ipads) => {
      this.ipads = ipads;
    })
  }

}
