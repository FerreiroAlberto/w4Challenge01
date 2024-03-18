import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Gentleman } from './data';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gentleman';

  gentleman: Gentleman[] = [
    {
      id: 1,
      name: 'Bertin Osborne',
      status: 'Alive',
      profession: 'Youtuber',
      twitter: '@osbourne',
      picture: 'bertin.jpg',
      alternativeText: 'Osbourne pointing at you',
      selected: true,
    },
    {
      name: 'The Farytale',
      status: 'RIP',
      profession: 'Influencer',
      twitter: 'pending',
      picture: 'fary.jpg',
      alternativeText: 'The Fary pointing at you',
      id: 2,
      selected: false,
    },
    {
      id: 3,
      name: 'Julius Churchs',
      status: 'Alive',
      profession: 'Java developer',
      twitter: '@julius_churchs',
      picture: 'julio.jpg',
      alternativeText: 'Churchs pointing at you',
      selected: true,
    },
  ];
}
