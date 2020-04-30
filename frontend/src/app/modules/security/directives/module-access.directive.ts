/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/6/19 9:43 AM Braune Digital GmbH
 */

import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModuleAccessService } from '../services/module-access.service';

@Directive({
  selector: '[moduleAccess]'
})
export class ModuleAccessDirective implements OnInit, OnDestroy {

  modules: Array<string>;
  private userEventSubscription: Subscription;

  // Is the element currently rendered
  private hasView = false;

  /**
   * First index is the subject, second one the workflow_name and third the transition_name
   * @param modules
   */
  @Input()
  set moduleAccess(modules: Array<string>) {
    this.modules = modules;
    this.handleChange();
  }

  constructor(private moduleAccessService: ModuleAccessService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.userEventSubscription) {
      this.userEventSubscription.unsubscribe();
      this.userEventSubscription = null;
    }
  }

  private handleChange(): void {
    this.userEventSubscription = this.moduleAccessService.hasAccess((this.modules) ? this.modules : []).subscribe(_ => {
      if (_) {
        this.show();
      } else {
        this.hide();
      }
    });
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
