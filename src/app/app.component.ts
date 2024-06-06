import { UsersList } from './data/users-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { filterUsersList } from './utils/filter-users-list';
import { IFilterOption } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userslistFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userslistFiltered = this.usersList;
    }, 3000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOption) {
    this.userslistFiltered = filterUsersList(filterOptions, this.usersList);
  }
}