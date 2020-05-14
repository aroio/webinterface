import {Component, HostBinding, Input} from '@angular/core';
import {SidebarWidgetInterface} from '../../../../../../core/interfaces/sidebar-widget';
import {WidgetTypes} from '../../../../../../../utils/configs/widgets';

@Component({
  selector: 'aroio-sidebar-widget',
  templateUrl: 'aroio-sidebar-widget.component.html'
})
export class AroioSidebarWidgetComponent {

  WidgetTypes = WidgetTypes;

  @Input() widget: SidebarWidgetInterface;
}
