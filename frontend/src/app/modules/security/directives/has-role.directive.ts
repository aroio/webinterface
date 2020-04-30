/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[hasRoles]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  roles: Array<string>;
  private userEventSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;

  /**
   * @param {[string , string]} condition
   */
  @Input()
  set hasRoles(roles: Array<string>) {
    this.roles = roles;
    this.handleChange();
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private auth: AuthService,
              private cdr: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    // this.userEventSubscription = this.auth.loggedInEvent.subscribe(u => {
    //   this.cdr.markForCheck();
    //   this.handleChange();
    // });
  }

  ngOnDestroy(): void {
    if (this.userEventSubscription) {
      this.userEventSubscription.unsubscribe();
      this.userEventSubscription = null;
    }
  }

  private handleChange(): void {
    if (AuthService.user.roles.filter(role => this.roles.includes(role)).length > 0) {
      this.show();
    } else {
      this.hide();
    }
  }

  // Show the element
  private show(): void {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  // Hide the element
  private hide(): void {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
