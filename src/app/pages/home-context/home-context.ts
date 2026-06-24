import { Component } from '@angular/core';
import { HomePageHeader } from '../home-page/components/home-page-header/home-page-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-context',
  imports: [HomePageHeader, RouterOutlet],
  templateUrl: './home-context.html',
  styleUrl: './home-context.scss',
})
export class HomeContext {

}
