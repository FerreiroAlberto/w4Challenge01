import { Component } from '@angular/core';

@Component({
  selector: 'isdi-main',
  standalone: true,
  imports: [],
  template: ` @for (item of [ { id: 1, name: 'Bertin Osborne', status: 'Alive',
    profession: 'Youtuber', twitter: '@osbourne', picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you', selected: true, }, { name: 'The
    Farytale', status: 'RIP', profession: 'Influencer', twitter: 'pending',
    picture: 'fary.jpg', alternativeText: 'The Fary pointing at you', id: 2,
    selected: false, }, { id: 3, name: 'Julius Churchs', status: 'Alive',
    profession: 'Java developer', twitter: '@julius_churchs', picture:
    'julio.jpg', alternativeText: 'Churchs pointing at you', selected: true, },
    ]; track $index){
    <p>{{ item.name }}</p>
    <p>{{ item.id }}</p>
    <p>{{ item.picture }}</p>
    <p>{{ item.profession }}</p>
    <p>{{ item.twitter }}</p>
    <p>{{ item.selected }}</p>
    }`,
  styles: ``,
})
export class MainComponent {
  gentleman: object[] = [
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
