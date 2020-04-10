import {Component, ElementRef, HostBinding, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'aroio-filter-list-item',
  templateUrl: 'aroio-filter-list-item.component.html'
})
export class AroioFilterListItemComponent {

  @HostBinding('class') class = 'aroio-filter-list__item';
  id = Math.random().toString(36).substring(7);


  // Modal Specific
  modalIndex = 0;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ){}

  // Modal Specific
  // -----------------------
  openModal(template: TemplateRef<any>, _index: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal--lg'});
  }

  modalAccept(_index) {
    console.log('Modal Accepted');
    this.modalRef.hide();
  }
  modalClose(_index) {
    console.log('Modal Closed');
    this.modalRef.hide();
  }
}
