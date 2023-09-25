import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { PropertiesPublishedService } from '../../service/properties-published.service';

@Component({
  selector: 'app-properties-published-list',
  templateUrl: './properties-published-list.component.html',
  styleUrls: ['./properties-published-list.component.scss']
})
export class PropertiesPublishedListComponent {

  profile: Profile | undefined;

  constructor(
    private profileService: ProfileService,
    private propertiesPublishedService: PropertiesPublishedService,
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

  editarPropiedad(index: number): void {
    if (this.profile && this.profile.propertiesPublished && this.profile.propertiesPublished[index]) {
      const propertyId = this.profile.propertiesPublished[index].id;
    }
  }

  eliminarPropiedad(index: number): void {
    if (this.profile && this.profile.propertiesPublished && this.profile.propertiesPublished[index]) {
      const propertyId = this.profile.propertiesPublished[index].id;
      this.propertiesPublishedService.deleteProperty(propertyId.toString()).subscribe(() => {
        if (this.profile && this.profile.propertiesPublished) {
          this.profile.propertiesPublished.splice(index, 1);
        }
      });
    }
  }
}
