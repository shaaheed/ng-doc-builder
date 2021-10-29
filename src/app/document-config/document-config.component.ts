import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { DocumentComponent } from '../document/document.component';
import { BaseComponent } from '../base.component';
import { BaseConfigComponent } from '../base-config.component';

@Component({
  selector: 'app-document-config',
  templateUrl: './document-config.component.html',
})
export class DocumentConfigComponent extends BaseConfigComponent implements OnInit {

  constructor(public common: CommonService) {
    super(common)
  }

  ngOnInit() {
    this.initModel<DocumentComponent>();
  }

  ngOnDestroy() {
    this.unsubscribe()
  }

}
