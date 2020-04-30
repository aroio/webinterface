import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'aroio-footer',
    templateUrl: 'aroio-footer.component.html'
})
export class AroioFooterComponent {
  constructor(public translate: TranslateService){}

}
