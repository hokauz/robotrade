import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavbarPageRoutingModule } from './navbar-routing.module';

import { NavbarPage } from './navbar.page';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageRoutingModule,
    SettingsPageModule
  ],
  declarations: [NavbarPage],
  exports: [NavbarPage]
})
export class NavbarPageModule {}
