import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList: any = [];

  constructor(private u_Service: UserService, private route: Router) {}

  ngOnInit(): void {
    this.userList = this.u_Service.initialLoad();
    console.log('this.', this.userList);
  }
  deleteItem(item) {
    this.userList.map((e, i) => {
      if (e.name == item.name) {
        this.userList.splice(i, 1);
      }
      this.u_Service.deleteUser(item);
    });
  }
  editItem(item) {
    const tosend: NavigationExtras = {
      queryParams: item,
      skipLocationChange: false,
      fragment: 'top',
    };
    this.route.navigate(['/create-user'], { state: { details: item } });
  }
}
