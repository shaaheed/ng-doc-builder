import { Component } from '@angular/core';
import { ImageService } from './services/image.service';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  selectedComponent: { id: string, name: string };

  constructor(private imageService: ImageService) {
    super();
  }

  ngOnInit() {
    this.subscribe(this.imageService.componentClicked, this.onComponentClicked.bind(this));
  }

  dragStartEvent(e: DragEvent, block) {
    e.dataTransfer.setData('component', block);
    e.dataTransfer.setData('from', 'block');
  }

  onComponentClicked(v: { id: string, name: string }) {
    //if (v.name !== this.selectedComponent.name) {
    this.selectedComponent = v;
    //}
  }

  back() {
    if (this.selectedComponent !== null) {
      this.selectedComponent = null;
    }
  }

}
