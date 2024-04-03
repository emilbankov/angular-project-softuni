import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { iMac } from 'src/app/types/imac';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-imac-details',
  templateUrl: './imac-details.component.html',
  styleUrls: ['./imac-details.component.css']
})
export class iMacDetailsComponent implements OnInit {
  imac = {} as iMac;
  isOwner: boolean = false;
  
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['imacId'];
      this.apiService.getImac(id).subscribe((imac) => {
        this.imac = imac;
        this.isOwner = this.userService.user?._id === this.imac._ownerId;
      })
    })
  }

  deleteImac() {
    this.activatedRoute.params.subscribe((data) => {
      const id = data['imacId'];
      const hasConfirmed = confirm(`Are you sure you want to delete ${this.imac.name}`);
      if (hasConfirmed) {
        this.apiService.deleteImac(id).subscribe(() => {
          this.router.navigate(['/imac-catalog'])
        })
      }
    })
  }
}
