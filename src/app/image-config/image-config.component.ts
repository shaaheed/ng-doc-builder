import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { property } from '../common/property-constant';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-config',
  templateUrl: './image-config.component.html',
})
export class ImageConfigComponent implements OnInit {

  private oldSrc: any;

  constructor(private service: ImageService) { }

  ngOnInit() {
  }

  fileInputChangeEvent(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const value = {
        component: this.service.selectedComponent.id,
        property: property.src,
        newValue: reader.result,
        oldValue: this.oldSrc
      };
      this.service.valueChanged.next(value);
      this.oldSrc = value.newValue;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

}
