import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-forms/models/user.model';
import { UserService } from 'src/app/user-forms/service/user.service';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  filteredUsers: any[] = [];
  alertMessage: string = ''; // Mensaje de alerta
  alertType: string = ''; // Tipo de alerta (danger o success)

  constructor(
    private userService: UserService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

  toggleUserStatus(user: User): void {
    user.status = !user.status;

    this.adminService.toggleUserStatus(user.iduser, user.status).subscribe(
      (response) => {
        if (!user.status) {
          this.alertMessage = 'Usuario deshabilitado con éxito.';
          this.alertType = 'danger';
        } else {
          this.alertMessage = 'Usuario habilitado con éxito.';
          this.alertType = 'success';
        }

        this.showAlert(this.alertMessage, this.alertType);

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  searchClients() {
    this.filteredUsers = this.users.filter((user) =>
      user.mail.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  hideAlert(): void {
    this.alertMessage = '';
    this.alertType = '';
  }

  showAlert(message: string, type: string): void {
    this.alertMessage = message;
    this.alertType = type;
    
    setTimeout(() => {
      this.hideAlert();
    }, 3000);
  }
}
