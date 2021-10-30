// Copyright (c) Sahidul Islam. All Rights Reserved.
// Author: https://github.com/shaaheed

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { BaseConfigComponent } from '../../base-config.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-config',
  templateUrl: './config.component.html',
})
export class TextConfigComponent extends BaseConfigComponent implements OnInit {

  fontFamilyOptions: any[] = [
    { name: 'Sans Serif', value: 'sans-serif' },
    { name: 'Serif', value: 'serif' },
    { name: 'Monospace', value: 'monospace' },
  ]

  constructor(
    public common: CommonService) {
      super(common)
    }

  ngOnInit() {
    this.initModel<TextComponent>();
  }

}
