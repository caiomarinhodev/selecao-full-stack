import { Component, HostListener, OnInit } from '@angular/core';
import { CrudService } from '../../core/service/crud.service';
import { AppInjector } from '../../app.injector';
import { ActivatedRoute } from '@angular/router';
import { BaseModelComponent } from '../../core/interface/base-model.component';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardPageComponent extends BaseModelComponent implements OnInit {

  public loadingRiskRevenue = false;

  protected service: CrudService = AppInjector.get(CrudService);

  totalInvoices: any;
  percentRisk: any;
  riskRevenue: any;

  percentRiskGauge: any;
  riskRevenueGauge: any;
  totalInvoicesGauge: any;

  storageCard: any;

  cards: any;


  constructor(private route: ActivatedRoute, private userService: UserService) {
    super();
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.navigate(['/']);
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
