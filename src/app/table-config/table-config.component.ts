import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { constant } from '../common/component-constant';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-table-config',
  templateUrl: './table-config.component.html',
})
export class TableConfigComponent implements OnInit {

  model: TableComponent;

  styleOptions: any[] = constant.borderOptions;

  constructor(
    private common: CommonService) {
  }

  ngOnInit() {
    this.model = this.common.getModel<TableComponent>();
    this.common.openSettings.subscribe(x => {
      this.model = this.common.getModel<TableComponent>();
    })
  }

}
