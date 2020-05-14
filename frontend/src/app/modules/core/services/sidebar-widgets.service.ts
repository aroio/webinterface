import {Injectable} from '@angular/core';
import {SidebarWidgetInterface} from '../interfaces/sidebar-widget';

@Injectable({
  providedIn: 'root'
})
export class SidebarWidgetsService {

  private widgets: Array<SidebarWidgetInterface> = [];

  constructor() {
  }

  get currentWidgets(): Array<SidebarWidgetInterface> {
    return this.widgets;
  }

  add(widget: SidebarWidgetInterface) {
    if (!this.exists(widget)) {
      this.widgets.push(widget);
    }
  }

  exists(widget: SidebarWidgetInterface) {
    return this.widgets.includes(widget);
  }

  remove(widget: SidebarWidgetInterface) {
    this.widgets = this.widgets.filter(_ => _ !== widget);
  }

  clear() {
    this.widgets = [];
  }
}
