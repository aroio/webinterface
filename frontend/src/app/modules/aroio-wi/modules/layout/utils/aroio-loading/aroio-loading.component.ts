
import { Component, Input, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Animations} from '../../animations/animations';

@Component({
    selector: 'aroio-loading',
    templateUrl: 'aroio-loading.component.html',
    animations: [
      Animations.fadeInOut
    ]
})
export class AroioLoadingComponent {

    @Input()
    isLoading = true;

    @Input()
    overlay = false;

    @Input()
    text = 'global.loading';
}
