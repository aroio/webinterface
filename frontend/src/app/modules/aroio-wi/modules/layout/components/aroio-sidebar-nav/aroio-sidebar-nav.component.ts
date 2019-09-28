import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'aroio-sidebar-nav, [aroio-sidebar-nav]',
    templateUrl: './aroio-sidebar-nav.component.html',
})
export class AroioSidebarNavComponent {

    @Input()
    hideSidebar = false;

    @Output()
    sidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    title = '';

    @Input()
    progress;

    toggleSidebar() {
        if (this.hideSidebar) {
            this.hideSidebar = false;
            this.sidebarToggle.emit(false);
        } else {
            this.hideSidebar = true;
            this.sidebarToggle.emit(true);
        }
    }
}
