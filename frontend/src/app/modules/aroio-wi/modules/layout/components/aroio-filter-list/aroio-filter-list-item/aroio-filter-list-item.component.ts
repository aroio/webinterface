import {Component, ElementRef, HostBinding, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'aroio-filter-list-item',
  templateUrl: 'aroio-filter-list-item.component.html'
})
export class AroioFilterListItemComponent implements OnInit {

  @HostBinding('class') class = 'aroio-filter-list__item';
  id = Math.random().toString(36).substring(7);

  form: FormGroup;

  // Modal Specific
  modalIndex = 0;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ){}


  ngOnInit() {
    this.form = new FormGroup({
      filterName: new FormControl('', Validators.required),
      comment: new FormControl(''),
      pegel: new FormControl(''),
    });
  }

  // Modal Specific
  // -----------------------
  openModal(template: TemplateRef<any>, _index: number) {
    if (!this.modalRef) {
      this.modalRef = this.modalService.show(template, {class: 'modal--lg'});
    }
  }

  modalAccept(_index) {
    console.log('Modal Accepted');
    this.modalRef.hide();
  }

  modalClose(_index) {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
