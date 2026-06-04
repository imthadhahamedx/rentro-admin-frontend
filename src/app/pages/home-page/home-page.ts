import { Component } from '@angular/core';
import { HomePageHeader } from './components/home-page-header/home-page-header';

@Component({
  selector: 'app-home-page',
  imports: [HomePageHeader],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
