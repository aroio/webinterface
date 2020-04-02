import { Component, Input } from '@angular/core';

@Component({
    selector: 'aroio-progress-bar',
    templateUrl: 'aroio-progress-bar.component.html',
    host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'progress',
        'class': 'progress-bar'
    },
})
export class AroioProgressBarComponent {

    @Input('progress') progress: number = 0;

    applyWidth() {
        return { 'width' : this.progress + '%' };
    }
}
