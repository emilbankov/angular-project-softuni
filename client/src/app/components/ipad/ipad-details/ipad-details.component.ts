import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import iPad from 'src/app/types/ipad';

@Component({
  selector: 'app-ipad-details',
  templateUrl: './ipad-details.component.html',
  styleUrls: ['./ipad-details.component.css']
})

export class iPadDetailsComponent implements OnInit {
  ipad = {} as iPad;
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId'];
      this.apiService.getIpad(id).subscribe((ipad) => {
        this.ipad = ipad;
      })
    })
  }

  deleteIpad() {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId'];
      const hasConfirmed = confirm(`Are you sure you want to delete ${this.ipad.name}`);
      if (hasConfirmed) {
        this.apiService.deleteIpad(id).subscribe(() => {
          this.router.navigate(['/ipad-catalog'])
        })
      }
    })
  }
}