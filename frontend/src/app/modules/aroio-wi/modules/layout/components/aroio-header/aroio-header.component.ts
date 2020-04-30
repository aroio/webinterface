import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'aroio-header',
    templateUrl: 'aroio-header.component.html'
})
export class AroioHeaderComponent {
  constructor(public translate: TranslateService){}
}
