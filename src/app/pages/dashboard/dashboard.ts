import { Component } from '@angular/core';
import { DashboardHeader } from './components/dashboard-header/dashboard-header';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardHeader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
