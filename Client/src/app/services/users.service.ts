import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


export class UsersService {
  users: Array<object> = [
    {
      name: 'Luke',
      position: 'Partner',
      office: 'Berlin',
      salary: '80000'
    },
    {
      name: 'Nelson',
      position: 'Supervisor',
      office: 'Frankfurt',
      salary: '95000'
    },
    {
      name: 'Amy Lee',
      position: 'Manager',
      office: 'Bonn',
      salary: '90000'
    },
    {
      name: 'Miroslav',
      position: 'CEO',
      office: 'Cologne',
      salary: '120000'
    }
  ];

  constructor() { }

  all(): Observable<Array<object>> {
    return;
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return;
  }

}
