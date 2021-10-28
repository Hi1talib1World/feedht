import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FEEDPageRoutingModule } from './feed-routing.module';

import { FEEDPage } from './feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FEEDPageRoutingModule
  ],
  declarations: [FEEDPage]
})
export class FEEDPageModule {}
