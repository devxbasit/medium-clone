import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './components/list-errors/list-errors.component';
import { ShowAuthedDirective } from './directives/show-authed.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListErrorsComponent, ShowAuthedDirective],
  imports: [CommonModule],
  exports: [ListErrorsComponent, ShowAuthedDirective, ReactiveFormsModule, CommonModule],
})
export class SharedModule {}
