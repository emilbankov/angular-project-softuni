import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { iMac } from 'src/app/types/imac';

@Component({
  selector: 'app-imac-details',
  templateUrl: './imac-details.component.html',
  styleUrls: ['./imac-details.component.css']
})
export class iMacDetailsComponent implements OnInit {
  imac = {} as iMac;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['imacId'];
      this.apiService.getImac(id).then((imac) => {
        this.imac = imac;
      })
    })
  }
}
