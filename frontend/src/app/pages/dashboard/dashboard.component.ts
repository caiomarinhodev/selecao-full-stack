import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CrudService } from '../../core/service/crud.service';
import { AppInjector } from '../../app.injector';
import { ActivatedRoute } from '@angular/router';
import { BaseModelComponent } from '../../core/interface/base-model.component';
import { UserService } from '../../service/user/user.service';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';
import { MatPaginator, MatSort, MatTableDataSource, Sort } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardPageComponent extends BaseModelComponent implements OnInit, AfterViewInit {

  protected service: CrudService = AppInjector.get(CrudService);

  available_tickers: any;

  selectedTicker: any;

  loading: boolean = false;

  displayedColumns: string[] = ['name', 'low', 'high', 'pctChange'];

  source: Ticker[] = [];

  dataSource = new MatTableDataSource<Ticker>(this.source);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private awesomeService: AwesomeAPIService, private _liveAnnouncer: LiveAnnouncer) {
    super();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.getAllAvailableTickers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getHistoryByTicker(ticker) {
    this.loading = true;
    this.awesomeService.getHistoryTicker(ticker, 10).subscribe((data: Ticker[]) => {
      console.log(data);
      this.dataSource.data = data;
      this.loading = false;
    },
      error => {
        this.loading = false;
        if (error.status === 401) {
          this.userService.logout();
          this.notification.error('Token expirado');
        }
        this.router.navigate(['/login']);
      });
  }

  getAllAvailableTickers() {
    this.loading = true;
    this.awesomeService.getAllAvailableTickers().subscribe((data: any) => {
      let keys = Object.keys(data);
      let values = Object.values(data);
      this.available_tickers = [];
      for (let i = 0; i < keys.length; i++) {
        this.available_tickers.push({ 'key': keys[i], 'value': values[i] });
      }
      this.selectedTicker = this.available_tickers[0]['key'];
      this.getHistoryByTicker(this.selectedTicker);
      this.loading = false;
    },
      error => {
        this.loading = false;
        if (error.status === 401) {
          this.userService.logout();
          this.notification.error('Token expirado');
        }
        this.router.navigate(['/login']);
      });
  }

  refresh() {
    this.getAllAvailableTickers();
  }


  selectTicker(event) {
    this.getHistoryByTicker(event);
  }


  getServiceURL(): string {
    return '';
  }

  back() {
    this.router.navigate(['/']);
  }

  /**
   * Gets the router URL.
   *
   * @returns {string}
   */
  getRouterURL(): string {
    return '';
  }

}


export interface Ticker {
  name: string;
  low: number;
  high: number;
  pctChange: string;
  code: string,
  codein: string,
  varBid: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string
}
