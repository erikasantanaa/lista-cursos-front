import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

//organizar importações do angular material, e exportar
@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
})
export class AppMaterialModuleTsModule { }
