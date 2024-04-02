import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { iPhone } from 'src/app/types/iphone';

@Component({
  selector: 'app-iphone-catalog',
  templateUrl: './iphone-catalog.component.html',
  styleUrls: ['./iphone-catalog.component.css']
})
export class iPhoneCatalogComponent implements OnInit {
  iphones: iPhone[] | null = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllIphones().subscribe((iphones) => {
      this.iphones = iphones;
    })
  }
  
}
