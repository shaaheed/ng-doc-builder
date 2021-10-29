// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit } from '@angular/core';
import { BaseConfigComponent } from 'src/app/base-config.component';
import { CommonService } from 'src/app/services/common.service';
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
