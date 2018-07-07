import { Component } from '@angular/core';
import { ImageService } from './services/image.service';
import { BaseComponent } from './base.component';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  selectedComponent: any;

  constructor(
    private imageService: ImageService,
    private common: CommonService) {
    super();
  }

  ngOnInit() {
    this.subscribe(this.common.openSettings, this.openSettings.bind(this));
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

}
