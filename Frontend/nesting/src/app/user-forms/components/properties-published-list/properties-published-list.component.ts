import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-properties-published-list',
  templateUrl: './properties-published-list.component.html',
  styleUrls: ['./properties-published-list.component.scss']
})
export class PropertiesPublishedListComponent {

  profile: Profile | undefined;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const profileId = params.get('id');
      if (profileId) {
        this.getProfileData(profileId);
      }
    });
  }

  getProfileData(profileId: string): void {
    this.profileService.getProfile(profileId).subscribe(profile => {
      this.profile = profile;
    });
  }

}