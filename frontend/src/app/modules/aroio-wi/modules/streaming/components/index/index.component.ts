import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: '<aroio-streaming-index-component>',
    templateUrl: './index.component.html'
})
export class StreamingIndexComponent implements OnInit {

    constructor(
        private  _api: HttpClient,
    ) {
    }

    ngOnInit() {
    }

}
