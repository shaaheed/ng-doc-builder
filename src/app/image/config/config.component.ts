import { Component, OnInit } from '@angular/core';
import { BaseConfigComponent } from 'src/app/base-config.component';
import { CommonService } from 'src/app/services/common.service';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-image-config',
  templateUrl: './config.component.html',
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
