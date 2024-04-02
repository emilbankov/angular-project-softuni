import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import iPad from 'src/app/types/ipad';

@Component({
  selector: 'app-ipad-details',
  templateUrl: './ipad-details.component.html',
  styleUrls: ['./ipad-details.component.css']
})

export class iPadDetailsComponent implements OnInit {
  ipad = {} as iPad;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId'];
      this.apiService.getIpad(id).then((ipad) => {
        this.ipad = ipad;
      })
    })
  }
}