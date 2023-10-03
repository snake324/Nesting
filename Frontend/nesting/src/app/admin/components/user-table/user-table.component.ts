import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-forms/models/user.model';
import { UserService } from 'src/app/user-forms/service/user.service';
import { AdminService } from 'src/app/admin/service/admin.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  toggleUserStatus(user: User): void {
    user.status = !user.status;
  
    this.adminService.toggleUserStatus(user.iduser, user.status)
      .subscribe(response => {
        console.log('Estado actualizado en el servidor:', response);
      });
  }
  
}
