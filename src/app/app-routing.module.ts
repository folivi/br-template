import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/SharedModule';

const routes: Routes = [{ path: '', component: HomeComponent  }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
