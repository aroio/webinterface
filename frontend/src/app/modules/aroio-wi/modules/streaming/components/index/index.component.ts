import {Component, OnInit, TemplateRef} from '@angular/core';
import UserInterface from '../../../../../../models/interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: '<aroio-streaming-index-component>',
    templateUrl: './index.component.html'
})
export class StreamingIndexComponent implements OnInit {

    test2;

    employments: any;

    // Modal Specific
    modalIndex = 0;
    modalRef: BsModalRef;

    constructor(
        private  _api: HttpClient,
        private modalService: BsModalService,
    ) {
    }

    ngOnInit() {
    }


    // Modal Specific
    // -----------------------

    openModal(template: TemplateRef<any>, _index: number) {
        this.modalIndex = _index;
        this.modalRef = this.modalService.show(template, {class: 'modal--lg'});
    }

    modalAccept() {
        this.modalRef.hide();
    }

    modalClose() {
        this.modalRef.hide();
    }
}
