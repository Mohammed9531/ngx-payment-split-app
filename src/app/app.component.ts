import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public persons: string[] = [];

  public onNextStep(event: string[]): void {
    this.persons = event;
  }
}
