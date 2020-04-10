import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'aroio-loading',
    templateUrl: 'aroio-loading.component.html',
    animations: [
      trigger('fadeInOut', [
        state('void', style({
          opacity: 0
        })),
        transition('void <=> *', animate('333ms ease')),
      ]),
    ],
})
export class AroioLoadingComponent {

    @Input()
    isLoading = true;

    @Input()
    overlay = false;

    @Input()
    text = 'global.loading';
}
