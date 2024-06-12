import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';

@NgModule({
  declarations: [ListErrorsComponent, ShowAuthedDirective],
  imports: [CommonModule],
  exports: [ListErrorsComponent, ShowAuthedDirective],
})
export class SharedModule {}
