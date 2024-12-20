import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  orders = [
    {
      id: '12345',
      firstName: 'ilyess',
      LastName: 'mlaouhi',
      Date: 'December 12, 2023',
      Email: 'mlaouhiilyess@gmail.com'
    },
    {
      id: '12346',
      firstName: 'amine',
      LastName: 'mlaouhi',
      Date: 'December 12, 2023',
      Email: 'mlaouhiilyess@gmail.com'
    },
    {
      id: '12347',
      firstName: 'aziz',
      LastName: 'mlaouhi',
      Date: 'December 12, 2023',
      Email: 'mlaouhiilyess@gmail.com'
    },
  ];
}
