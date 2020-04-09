import {Component, Input} from '@angular/core';

@Component({
    selector: 'aroio-message',
    templateUrl: 'aroio-message.component.html'
})
export class AroioMessageComponent{

    @Input('color') color: string;
    @Input('title') title: string = null;
    @Input('size') size: string = null;

    constructor() {

    }


}
