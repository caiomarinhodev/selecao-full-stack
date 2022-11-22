import { Component, HostListener, OnInit } from '@angular/core';
import { CrudService } from '../../core/service/crud.service';
import { AppInjector } from '../../app.injector';
import { ActivatedRoute } from '@angular/router';
import { BaseModelComponent } from '../../core/interface/base-model.component';
import { UserService } from '../../service/user/user.service';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardPageComponent extends BaseModelComponent implements OnInit {

  protected service: CrudService = AppInjector.get(CrudService);

  available_tickers: any;

  selectedTicker: any;

  loading: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private awesomeService: AwesomeAPIService) {
    super();
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.getAllAvailableTickers();
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
      console.log(this.selectedTicker);
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
    console.log(event);
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
