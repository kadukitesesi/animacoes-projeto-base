import { style, trigger, state, transition, animate, keyframes, group } from '@angular/animations';

export const highlitedStateTrigger = trigger('highlightedState',[
    state('default', style({
      border: '2px solid #B2B6FF'
    })),
    state('highlited', style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)'
    })),
    transition('default => highlited',[
      animate('200ms ease-out',
        style({
        transform: 'scale(1.02)'
      }),),
      animate(200)
    ])
  ])

  export const shownStateTrigger = trigger('shownState', [

    transition(':enter',[
      style({
        opacity:0
      }),
      animate(300, style({
        opacity: 1
      }))
    ]),
    transition(':leave',[
      animate(300, style({
        opacity: 0
      }))
    ])
  ])

  export const animateCheckBox = trigger('animateCheck', [
    transition('* => checked',[
      animate('400ms ease-in',
          style({
        transform: 'scale(0.4)'
      }),),
      animate(200)
      ])
    ])

    export const filterTrigger = trigger('filterAnimation', [
      transition(':enter', [
        style({opacity:0, width: 0}),
        animate('400ms ease-out', keyframes([
          style({opacity:0, width:0}),
          style({opacity:0.5, width:'*'}),
          style({opacity:1, width:'*'})
        ]))
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({
          opacity:0,
          width:0
        }))
      ])
    ])

    export const formButtonTrigger = trigger('formButton', [
      transition('invalid => valid', [
              group([
                animate(200, style({
                    backgroundColor: '#63B77C'
                })),
                animate(100, style({
                    transform: 'scale(1.1)'
                })),
      ]),
        animate(200, style({
            transform: 'scale(1)'
        })),
      transition('valid => invalid', [
        group([
          animate(100, style({
              transform: 'scale(1.1)'
          })),
          animate(200, style({
              backgroundColor: '#6C757D'
          })),
      ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
      ])
    ])
  ])
