import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../../../../utils/bem';

@Component({
    selector: 'bd-sidebar-action',
    templateUrl: './bd-sidebar-action.component.html',
})
export class BdSidebarActionComponent {

  baseClass = 'sidebar__action';

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }
}
