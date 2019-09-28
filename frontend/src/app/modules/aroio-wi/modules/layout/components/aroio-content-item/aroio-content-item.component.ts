
import { Component, HostBinding, Input } from '@angular/core';
import {Bem} from '../../../../../../utils/bem';

@Component({
  selector: 'aroio-content-item, [aroio-content-item]',
  templateUrl: './aroio-content-item.component.html',
})
export class AroioContentItemComponent {
  baseClass: string = 'tmpl__content__item';

  @Input()
  largeSpacing = false;

  @Input()
  card = false;

  @Input()
  disabled = false;

  @Input()
  centered = false;

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);

    return bem.setMods(this.baseClass, [
        bem.checkModifier(this.largeSpacing, 'lg'),
        bem.checkModifier(this.card, 'card'),
        bem.checkModifier(this.centered, 'centered'),
        bem.checkModifier(this.disabled, 'disabled'),
    ]);
  }
}
