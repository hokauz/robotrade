import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { MovingAveragePageModule } from 'src/app/indicators/moving-average/moving-average.module';
import { RoboSignalsPageModule } from '../robo-signals/robo-signals.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    MovingAveragePageModule,
    RoboSignalsPageModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
