import { IApplication } from '../../application/interface-application';
import { IResultPage } from '../../interface/result-page.interface';
import { MetaColumn } from '../../interfaces/metacolumn.interface';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../services/utils.service';
import { MatDialogRef } from '@angular/material/dialog';

enum TypeExport {
  EXCEL = 'excel',
  PDF = 'pdf',
}

export abstract class BaseComponent<
  Entity,
  Application extends IApplication<Entity>,
  Modal
> {
  abstract listFields: string[];
  abstract metaColumns: MetaColumn[];

  quantityRecords: number;
  currentPage: number = 0;
  pageSize: number = environment.pageSize;

  protected filename: string = 'data';
  protected sheetName: string = 'Sheet1';
  protected titleReport: string = 'Título reporte';

  private application: Application;
  protected dataSource: any[] = [];

  constructor(
    application: Application,
    protected utilsService: UtilsService,
    private context: any
  ) {
    this.application = application;
    this.getRecordsByPage(0);
  }

  getRecordsByPage(page: number): void {
    this.application
      .page(page)
      .subscribe({ next: this.fillDataSource.bind(this) });
    this.currentPage = page;
  }

  private fillDataSource(result: IResultPage<Entity>) {
    this.dataSource = result.records;
    this.quantityRecords = result.totalRecords;
  }

  protected delete(row: any) {
    this.utilsService
      .showConfirm('¿Está seguro de eliminar el registro?')
      .subscribe((response: boolean) => {
        if (response) {
          this.application.delete(row.id).subscribe(() => {
            this.getRecordsByPage(this.currentPage);
            this.utilsService.showNotification('Registro eliminado');
          });
        }
      });
  }

  protected showModalWindow(row: any = null) {
    const reference: MatDialogRef<Modal> = this.utilsService.showModalWindow(
      this.context,
      {
        disableClose: true,
        panelClass: 'form-modal-medic',
        data: row,
      }
    );

    reference.afterClosed().subscribe((response: any) => {
      if (!response) {
        return;
      }

      if (response.id) {
        this.application.update(response.id, response.record).subscribe(() => {
          this.getRecordsByPage(this.currentPage);
          this.utilsService.showNotification('Registro actualizado');
        });
      } else {
        this.application.insert(response.record).subscribe(() => {
          this.getRecordsByPage(this.currentPage);
          this.utilsService.showNotification('Registro insertado');
        });
      }
    });
  }

  protected export(type: string) {
    this.application.list().subscribe((records: Entity[]) => {
      if (type === TypeExport.EXCEL) {
        this.utilsService.exportToExcel(
          records,
          this.metaColumns,
          this.filename,
          this.sheetName
        );
      } else if (type === TypeExport.PDF) {
        this.utilsService.exportToPdf(
          records,
          this.metaColumns,
          this.filename,
          this.titleReport
        );
      }
    });
  }
}
