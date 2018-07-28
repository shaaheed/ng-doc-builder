import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { LineComponent } from '../line/line.component';
import { constant } from '../common/constant';
import { BaseConfigComponent } from '../base-config.component';

@Component({
  selector: 'app-line-config',
  templateUrl: './line-config.component.html',
})
export class LineConfigComponent extends BaseConfigComponent implements OnInit {

  styleOptions: any[] = constant.borderOptions;

  constructor(
    public common: CommonService) {
      super(common);
  }

  ngOnInit() {
    this.initModel<LineComponent>();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
