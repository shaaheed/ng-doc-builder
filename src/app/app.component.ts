// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { BaseCommonComponent } from './base-common.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseCommonComponent {

  selectedComponent: any;
  selectedTab: string = '';

  constructor(
    public common: CommonService) {
    super(common);
  }

  ngOnInit() {
    this.subscribe(this.common.openSettings, this.openSettings.bind(this));
    this.subscribe(this.common.closeSettings, () => { this.selectedComponent = null })
    this.selectedTab = 'document';
  }

  dragStartEvent(e: DragEvent, block: any) {
    e.dataTransfer?.setData('component', block);
    e.dataTransfer?.setData('from', 'block');
  }

  openSettings() {
    this.selectedComponent = this.common.getModel();
  }

  back() {
    if (this.selectedComponent !== null) {
      this.selectedComponent = null;
    }
  }

  changeTab(tab: any) {
    this.selectedTab = tab;
    if (tab === 'document') {
      this.selectedComponent = null;
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}