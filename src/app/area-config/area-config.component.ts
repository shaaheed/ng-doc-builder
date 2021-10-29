import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { BaseConfigComponent } from '../base-config.component';
import { AreaComponent } from '../area/area.component';

@Component({
  selector: 'app-area-config',
  templateUrl: './area-config.component.html',
})
export class AreaConfigComponent extends BaseConfigComponent implements OnInit {

  constructor(public common: CommonService) {
    super(common);
  }

  ngOnInit() {
    this.initModel<AreaComponent>();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
