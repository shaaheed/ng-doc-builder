import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-text-config',
  templateUrl: './text-config.component.html',
})
export class TextConfigComponent implements OnInit {

  model: TextComponent;
  fontFamilyOptions: any[] = [
    { name: 'Sans Serif', value: 'sans-serif' },
    { name: 'Serif', value: 'serif' },
    { name: 'Monospace', value: 'monospace' },
  ]

  constructor(
    private common: CommonService) { }

  ngOnInit() {
    this.model = this.common.getModel<TextComponent>();
    this.common.openSettings.subscribe(x => {
      this.model = this.common.getModel<TextComponent>();
    })
  }

}
