import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { CommonService } from '../services/common.service';
import { BaseComponent } from '../base.component';
import { BaseConfigComponent } from '../base-config.component';

@Component({
  selector: 'app-image-config',
  templateUrl: './image-config.component.html',
})
export class ImageConfigComponent extends BaseConfigComponent implements OnInit {

  constructor(
    public common: CommonService) {
    super(common)
  }

  ngOnInit() {
    this.initModel<ImageComponent>()
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
