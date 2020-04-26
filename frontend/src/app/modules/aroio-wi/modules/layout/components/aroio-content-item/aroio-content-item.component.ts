
import { Component, HostBinding, Input } from '@angular/core';
import {Bem} from '../../../../../../utils/bem';

@Component({
  selector: 'aroio-content-item, [aroio-content-item]',
  templateUrl: './aroio-content-item.component.html',
})
export class AroioContentItemComponent {

  @Input() title: string;
  @Input() singleItem = false;

}
