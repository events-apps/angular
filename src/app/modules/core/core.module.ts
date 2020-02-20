import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { EnvironmentService } from './services/environment.service';
import { httpInterceptorProviders } from './interceptors';
import { ShellComponent } from './components/shell/shell.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent, ShellComponent],
  providers: [EnvironmentService, httpInterceptorProviders],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class CoreModule { }
