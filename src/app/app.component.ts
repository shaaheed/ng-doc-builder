import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  onStop(e) {
    console.log('on stop', e);
  }

  dragEndEvent(e) {
    console.log('drag end', e);
  }

  dragStartEvent(e: DragEvent, block) {
    e.dataTransfer.setData('component', block);
    e.dataTransfer.setData('from', 'block');
  }

}
