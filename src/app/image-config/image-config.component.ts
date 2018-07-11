import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-image-config',
  templateUrl: './image-config.component.html',
})
export class ImageConfigComponent implements OnInit {

  model: ImageComponent;

  constructor(
    private common: CommonService) {
  }

  ngOnInit() {
    this.model = this.common.getModel<ImageComponent>();
    this.common.openSettings.subscribe(x => {
      this.model = this.common.getModel<ImageComponent>();
    })
  }

}
