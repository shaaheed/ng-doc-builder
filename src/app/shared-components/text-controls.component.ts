import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-controls',
  template: `
  <div class="picker text-controls">
    <mat-icon [class.active]="align == 'left'" (click)="changeAlign('left')">format_align_left</mat-icon>
    <mat-icon [class.active]="align == 'center'" (click)="changeAlign('center')">format_align_center</mat-icon>
    <mat-icon [class.active]="align == 'right'" (click)="changeAlign('right')">format_align_right</mat-icon>
    <mat-icon [class.active]="align == 'justify'" (click)="changeAlign('justify')">format_align_justify</mat-icon>
    <mat-icon [class.active]="bold" (click)="toggleOption('bold')">format_bold</mat-icon>
    <mat-icon [class.active]="italic" (click)="toggleOption('italic')">format_italic</mat-icon>
    <mat-icon [class.active]="underline" (click)="toggleOption('underline')">format_underlined</mat-icon>
  </div>
  `
})
export class TextControlsComponent implements OnInit {

  @Input() align: string;
  @Output() alignChange: EventEmitter<string> = new EventEmitter();
  @Input() bold: boolean;
  @Output() boldChange: EventEmitter<boolean> = new EventEmitter();
  @Input() underline: boolean;
  @Output() underlineChange: EventEmitter<boolean> = new EventEmitter();
  @Input() italic: boolean;
  @Output() italicChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleOption(option) {
    this[option] = !this[option];
    this[`${option}Change`].emit(this[option]);
  }

  changeAlign(align) {
    this.align = align;
    this.alignChange.emit(this.align);
  }

}
