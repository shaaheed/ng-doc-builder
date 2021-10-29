import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { TextComponent } from '../text/text.component';
import { BaseConfigComponent } from '../base-config.component';

@Component({
  selector: 'app-text-config',
  templateUrl: './text-config.component.html',
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
