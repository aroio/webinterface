/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[isNotAuthorized]'
})
export class IsNotAuthorizedDirective implements OnInit, OnDestroy {

  modules: Array<string>;
  private userEventSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;


  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainer: ViewContainerRef,
              private _storage: StorageService) {
  }


  ngOnInit(): void {
    this.handleChange();
    this.userEventSubscription = AuthService.onAuthenticate.subscribe(_user => {
      if (_user) {
        this.hide();
        return;
      }
      this.show();
    });
  }

  ngOnDestroy(): void {
    if (this.userEventSubscription) {
      this.userEventSubscription.unsubscribe();
      this.userEventSubscription = null;
    }
  }

  private handleChange(): void {
    AuthService.isAuthenticated(this._storage).then(_ => {
      this.hide();
    }, _ => {
      this.show();
    });
  }

  // Show the element
  private show(): void {
    if (!this.hasView) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this.hasView = true;
    }
  }

  // Hide the element
  private hide(): void {
    if (this.hasView) {
      this._viewContainer.clear();
      this.hasView = false;
    }
  }
}
