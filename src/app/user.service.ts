import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  initialLoad() {
    let user = [
      {
        name: 'vipin',
        dob: '2004-09-06T18:30:00.000Z',
        role: '2',
        address: 'shreyas',
        phone: '977567887',
        gender: 'male',
        date: '2021-09-06T18:30:00.000Z',
        'passw]ord': '123',
        email: 'vipin.p@gmail.com',
      },
    ];
    if (
      localStorage.getItem('userList') == null ||
      localStorage.getItem('userList') == undefined
    ) {
      localStorage.setItem('userList', JSON.stringify(user));
    } else {
      return this.getUser();
    }
  }
  getUser() {
    console.log('getUser', JSON.parse(localStorage.getItem('userList')));

    return JSON.parse(localStorage.getItem('userList'));
  }
  addUser(userData, type?) {
    let user = JSON.parse(localStorage.getItem('userList'));

    if (type == 'Update') {
      user.map((e, i) => {
        if (e.name == userData.name) {
          user[i] = userData;
        }
      });
      localStorage.setItem('userList', JSON.stringify(user));

    } else {
      user.push(userData);
      localStorage.setItem('userList', JSON.stringify(user));
    }
  }
  deleteUser(item) {
    let user = JSON.parse(localStorage.getItem('userList'));
    user.map((e, i) => {
      if ((e.name = item.name)) {
        user.splice(i, 1);
      }
    });
    localStorage.setItem('userList', JSON.stringify(user));
  }
}
