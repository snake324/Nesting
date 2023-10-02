import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user-forms/models/user.model';
import { ProfileService } from 'src/app/user-forms/service/profile.service';
import { UserService } from 'src/app/user-forms/service/user.service';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  profile: any = { iduser: '', name: '', lastname: '', address: '' };
  user: User | undefined;
  showForm: boolean = false;

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const profileId = params.get('id');
      if (profileId) {
        this.getProfileData(profileId);
        this.getUserData(profileId);
      }
    });
  }

  getProfileData(profileId: string): void {
    this.profileService.getProfile(profileId).subscribe(profile => {
      if (profile) {
        this.profile = profile;
        if (
          !this.profile.name ||
          !this.profile.lastname ||
          !this.profile.address
        ) {
          this.showForm = true;
        }
      } else {
        this.profile = {
          name: '',
          lastname: '',
          address: ''
        };
        this.showForm = true;
      }
    });
  }
  
  

  getUserData(userId: string): void {
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
    });
  }

  saveProfile() {
    this.profileService.saveProfile(this.profile).subscribe(response => {
      console.log('Datos introducidos con éxito', response);
      window.location.reload();
    });
  }
}

