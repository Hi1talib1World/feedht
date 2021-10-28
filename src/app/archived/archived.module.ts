import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchivedPageRoutingModule } from './archived-routing.module';

import { ArchivedPage } from './archived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchivedPageRoutingModule
  ],
  declarations: [ArchivedPage]
})
export class ArchivedPageModule {}
