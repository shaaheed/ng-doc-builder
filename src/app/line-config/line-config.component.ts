import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { LineComponent } from '../line/line.component';
import { constant } from '../common/component-constant';

@Component({
  selector: 'app-line-config',
  templateUrl: './line-config.component.html',
})
export class LineConfigComponent implements OnInit {

  model: LineComponent;

  styleOptions: any[] = constant.borderOptions;

  constructor(
    private common: CommonService) {
  }

  ngOnInit() {
    this.model = this.common.getModel<LineComponent>();
    this.common.openSettings.subscribe(x => {
      this.model = this.common.getModel<LineComponent>();
    })
  }

}
