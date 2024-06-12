import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NoAuthGuard } from './guards/no-auth-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [AuthRoutingModule],
  providers: [NoAuthGuard],
})
export class AuthModule {}
