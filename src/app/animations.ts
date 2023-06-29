import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  // transition('void=>*', [
  //   style({
  //     opacity: 0,
  //   }),
  //   animate(2000),
  // ]),
  // transition('*=>void', [
  //   animate(
  //     2000,
  //     style({
  //       opacity: 0,
  //     })
  //   ),
  // ]),
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(2000),
  ]),
  transition(':leave', [
    animate(
      2000,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const animateStateTrigger = trigger('animateState', [
  transition('*=>*', [
    animate(
      '4000ms cubic-bezier(.16,.78,0,.92)',
      style({
        width: 0,
      })
    ),
    animate(
      400,
      style({
        width: '*',
      })
    ),
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white',
    }),
    group([
      animate(
        1000,
        style({
          opacity: 0.7,
        })
      ),
      animate(
        '4000ms ease-out',
        keyframes([
          style({
            backgroundColor: 'white',
            offset: 0,
          }),
          style({
            backgroundColor: 'green',
            offset: 0.8,
          }),
          style({
            backgroundColor: 'red',
            offset: 1,
          }),
        ])
        // style({
        //   // opacity: 1,
        //   backgroundColor: 'red',
        // })
      ),
    ]),
    animate(
      1000,
      style({
        opacity: 1,
        backgroundColor: 'lightblue',
      })
    ),
  ]),
  transition(':leave', [
    animate(
      2000,
      style({
        opacity: 0,
      })
    ),
  ]),
]);
