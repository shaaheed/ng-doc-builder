import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { constant } from '../common/constant';
import { CommonService } from '../services/common.service';
import { BaseConfigComponent } from '../base-config.component';

@Component({
  selector: 'app-table-config',
  templateUrl: './table-config.component.html',
})
export class TableConfigComponent extends BaseConfigComponent implements OnInit {

  styleOptions: any[] = constant.borderOptions;

  constructor(
    public common: CommonService) {
      super(common);
  }

  ngOnInit() {
   this.initModel<TableComponent>();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
