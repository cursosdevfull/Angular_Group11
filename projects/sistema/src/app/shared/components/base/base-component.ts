import { IApplication } from '../../application/interface-application';
import { IResultPage } from '../../interface/result-page.interface';
import { MetaColumn } from '../../interfaces/metacolumn.interface';
import { environment } from '../../../../environments/environment';

export abstract class BaseComponent<
  Entity,
  Application extends IApplication<Entity>
> {
  abstract listFields: string[];
  abstract metaColumns: MetaColumn[];

  quantityRecords: number;
  currentPage: number = 0;
  pageSize: number = environment.pageSize;

  private application: Application;

  protected dataSource: any[] = [];

  constructor(application: Application) {
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
}
