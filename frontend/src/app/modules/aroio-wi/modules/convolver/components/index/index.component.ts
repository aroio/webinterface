import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: '<aroio-convolver-index-component>',
    templateUrl: './index.component.html'
})
export class ConvolverIndexComponent implements OnInit {

    constructor(
        private  _api: HttpClient,
    ) {
    }

    ngOnInit() {
    }
}
