import { Component } from '@angular/core';

@Component({
    selector: 'security-not-found-component',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
    currentPath = window.location.href;
}
