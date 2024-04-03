import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import iPad from 'src/app/types/ipad';
import { UserService } from '../../user/user.service';
import { Accessory } from 'src/app/types/accessory';

@Component({
  selector: 'app-ipad-details',
  templateUrl: './ipad-details.component.html',
  styleUrls: ['./ipad-details.component.css']
})

export class iPadDetailsComponent implements OnInit {
  ipad = {} as iPad;
  isOwner: boolean = false;
  accessories: Accessory[] = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['ipadId'];
      this.apiService.getIpad(id).subscribe((ipad) => {
        this.ipad = ipad;
        this.isOwner = this.userService.user?._id === this.ipad._ownerId;
      })
    })

    this.apiService.getAllAccessories().subscribe((accessories) => {
      this.accessories = accessories.filter((accessory) => {
        return accessory.type === 'ipad';
      });
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