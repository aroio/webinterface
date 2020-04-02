import {Component, Input} from '@angular/core';

@Component({
    selector: 'aroio-progress-circle',
    templateUrl: 'aroio-progress-circle.component.html',
    host: {
        'role': 'progresscircle',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'progress',
        'class': 'progress-circle'
    },
})
export class AroioProgressCircleComponent {

    @Input()
    progress = 0;

    @Input()
    minutesLeft = 0;

    @Input()
    label = 'global.time_to_end';


    applyWidth() {
        const degreesToTransform = (360 / 100 * this.progress) / 2;
        return {'transform': 'rotate(' + degreesToTransform + 'deg)'};
    }
}
