import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Spiderman');
  age = signal(18);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()} años`;
  }

  changeName(): void {
    this.name.set('Ironman');
  }

  changeAge(): void {
    this.age.set(45);
  }

  reset(): void {
    this.name.set('Spiderman');
    this.age.set(18);
  }
}