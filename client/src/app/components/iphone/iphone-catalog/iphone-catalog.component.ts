import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-iphone-catalog',
  templateUrl: './iphone-catalog.component.html',
  styleUrls: ['./iphone-catalog.component.css']
})
export class iPhoneCatalogComponent implements OnInit {

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getIphones().subscribe((iphones) => {
      console.log(iphones);
      
    })
  }
}
