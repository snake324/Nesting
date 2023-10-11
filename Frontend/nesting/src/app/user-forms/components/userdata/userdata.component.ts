import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  profile: any = { name: '', lastname: '', address: '' };
  user: any;  // Update this to any if the structure of User is unknown
  showForm: boolean = false;
  card: any;

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
    this.profileService.getProfile(profileId).subscribe((profile) => {
        console.log('Profile Data:', profile);
        if (profile) {
            this.profile = profile;
            this.card = profile.card;  // Update this line
            if (!this.profile.name || !this.profile.lastname || !this.profile.address) {
                this.showForm = true;
            }
        } else {
            this.profile = {
                name: '',
                lastname: '',
                address: '',
            };
            this.showForm = true;
        }

        console.log('Card Data:', this.card);
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

  formatCardNumber(number: string): string {
    // Oculta los primeros 12 dígitos
    const hiddenPart = '**** **** **** ';
    // Obtiene los últimos 4 dígitos
    const lastFourDigits = number.slice(-4);
    // Formatea el número de tarjeta con guiones
    const formattedNumber = hiddenPart + lastFourDigits;
  
    return formattedNumber;
  }
}
