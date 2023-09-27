import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { Profile } from '../../models/profile.model';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  profile: Profile = {
    id: 0,
    name: '',
    lastname: '',
    address: '',
    card: null,
    propertiesPublished: []
  };
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

  saveProfile(): void {
    if (this.profile) {
      this.profileService.saveProfile(this.profile).subscribe(result => {
        console.log('Perfil guardado exitosamente', result);
      });
    }
  }
}
