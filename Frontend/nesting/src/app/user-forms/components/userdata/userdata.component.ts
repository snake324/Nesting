import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  profile: any = { name: '', lastname: '', address: '' };
  user: User | undefined;

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
      } else {
        this.profile = {
          id: 0,
          name: '',
          lastname: '',
          address: '',
          card: null,
          propertiesPublished: []
        };
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
    });
  }
}
