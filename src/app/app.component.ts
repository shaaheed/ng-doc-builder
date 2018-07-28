import { Component } from '@angular/core';
import { BaseComponent } from './base.component';
import { CommonService } from './services/common.service';
import { BaseCommonComponent } from './base-common.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseCommonComponent {

  selectedComponent: any;
  seletectedTab: string;

  constructor(
    public common: CommonService) {
    super(common);
  }

  ngOnInit() {
    this.subscribe(this.common.openSettings, this.openSettings.bind(this));
    this.subscribe(this.common.closeSettings, () => { this.selectedComponent = null })
    this.seletectedTab = 'document';
  }

  dragStartEvent(e: DragEvent, block) {
    e.dataTransfer.setData('component', block);
    e.dataTransfer.setData('from', 'block');
  }

  openSettings() {
    this.selectedComponent = this.common.getModel();
  }

  back() {
    if (this.selectedComponent !== null) {
      this.selectedComponent = null;
    }
  }

  changeTab(tab) {
    this.seletectedTab = tab;
    if (tab === 'document') {
      this.selectedComponent = null;
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
