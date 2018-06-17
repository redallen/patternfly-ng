var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from '../../pagination/pagination.module';
import { EmptyStateModule } from '../../empty-state/empty-state.module';
import { NgxDataTableConfig } from './ngx-datatable-config';
import { NgxDataTableDndDirective } from './ngx-datatable-dnd.directive';
import { TableComponent } from './table.component';
import { TableConfig } from './table-config';
import { TableEvent } from '../table-event';
import { ToolbarModule } from '../../toolbar/toolbar.module';
export { NgxDataTableConfig, TableConfig, TableEvent };
/**
 * A module containing objects associated with table components
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DragulaModule,
                EmptyStateModule,
                FormsModule,
                PaginationModule,
                NgxDatatableModule,
                ToolbarModule
            ],
            declarations: [NgxDataTableDndDirective, TableComponent],
            exports: [TableComponent],
            providers: [DragulaService]
        })
    ], TableModule);
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=table.module.js.map