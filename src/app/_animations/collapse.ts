import { trigger, transition, style, group, animate, state } from '@angular/animations';

const visibleStyle = {
  height: '*', 'padding-top': '*', 'padding-bottom': '*'
};

const hiddenStyle = {
  height: '0', 'padding-top': '0', 'padding-bottom': '0'
};

export function collapse(time: number, removeFromDom: boolean = true) {
  return trigger('collapse', [
    state('true', style(visibleStyle)),
    state('false', style(hiddenStyle)),
    transition(removeFromDom ? ':enter' : 'false => true', [
      style(hiddenStyle),
      group([
        animate(time, style(visibleStyle))
      ])
    ]),
    transition(removeFromDom ? ':leave' : 'true => false', [
      style(visibleStyle),
      group([
        animate(time, style(hiddenStyle))
      ])
    ])
  ]);
}