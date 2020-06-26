import {Component, HostBinding, Input} from '@angular/core';
import {SidebarWidgetInterface} from '../../../../../../core/interfaces/sidebar-widget';
import {WidgetTypes} from '../../../../../../../utils/configs/widgets';
import {AroioSettingsInterface} from '../../../../../../core/interfaces/aroio-settings.interface';
import {AroioSettingsService} from '../../../../../../core/services/aroio-settings.service';

@Component({
  selector: 'aroio-sidebar-widget',
  templateUrl: 'aroio-sidebar-widget.component.html'
})
export class AroioSidebarWidgetComponent {

  WidgetTypes = WidgetTypes;
  @Input() widget: SidebarWidgetInterface;

  settings: AroioSettingsInterface;

  constructor(
    private settingsService: AroioSettingsService
  ) {
    this.settingsService.getAroioSettings().subscribe(_ => {
      this.settings = _;
    });
  }

}
