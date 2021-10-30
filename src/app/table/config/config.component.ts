// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit } from '@angular/core';
import { BaseConfigComponent } from 'src/app/base-config.component';
import { constant } from 'src/app/common/constant';
import { CommonService } from 'src/app/services/common.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-table-config',
  templateUrl: './config.component.html',
})
export class TableConfigComponent extends BaseConfigComponent implements OnInit {

  styleOptions: any[] = constant.borderOptions;

  constructor(
    public common: CommonService
  ) {
    super(common);
  }

  ngOnInit() {
    this.initModel<TableComponent>();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
