import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { iPhone } from 'src/app/types/iphone';
import { UserService } from '../../user/user.service';
import { Accessory } from 'src/app/types/accessory';

@Component({
  selector: 'app-iphone-details',
  templateUrl: './iphone-details.component.html',
  styleUrls: ['./iphone-details.component.css']
})

export class iPhoneDetailsComponent implements OnInit {
  iphone = {} as iPhone;
  accessories: Accessory[] = [];
  isOwner: boolean = false;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['iphoneId'];
      this.apiService.getIphone(id).subscribe((iphone) => {
        this.iphone = iphone;
        this.isOwner = this.userService.user?._id === this.iphone._ownerId;
      })
    })

    this.apiService.getAllAccessories().subscribe((accessories) => {
      this.accessories = accessories.filter((accessory) => {
        return accessory.type === 'iphone';
      });
    })
  }

  deleteIphone() {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['iphoneId'];
      const hasConfirmed = confirm(`Are you sure you want to delete ${this.iphone.name}`);
      if (hasConfirmed) {
        this.apiService.deleteIphone(id).subscribe(() => {
          this.router.navigate(['/iphone-catalog'])
        })
      }
    })
  }
}