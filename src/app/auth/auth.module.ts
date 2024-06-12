import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NoAuthGuard } from './guards/no-auth-guard.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [AuthRoutingModule],
  providers: [NoAuthGuard],
})
export class AuthModule {}
