import { Component } from '@angular/core';
import {
  animateStateTrigger,
  listStateTrigger,
  showStateTrigger,
} from './animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [showStateTrigger, animateStateTrigger, listStateTrigger],
})
export class AppComponent {
  title = 'angularAnimationSection5';
  isShown = false;
  width = 400;
  animate = false;
  testResults: number[] = [];

  OnAddElement() {
    this.testResults.push(Math.random());
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }

  onAnimationEnd(event: AnimationEvent) {
    console.log(event);
  }
}
