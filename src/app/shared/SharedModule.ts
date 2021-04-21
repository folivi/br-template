import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [TranslateModule.forChild(),CommonModule],
  exports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule { }
