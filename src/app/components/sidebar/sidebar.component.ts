import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userName: string = 'Eva Murphy';
  userRole: string = 'Web Developer';

}
