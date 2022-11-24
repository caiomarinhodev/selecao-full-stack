import { OnInit } from '@angular/core';

import { BaseModelComponent } from './base-model.component';

/**
 * The 'BaseListComponent' provides the common API for all list components.
 *
 * Service, operations, searches, navigations are all available.
 *
 * All edit components MUST extend this class.
 *
 * @extends BaseModelComponent
 *
 * @property {DeleteConfirmationComponent}  deleteConfirmation  - component to confirm the remove operation.
 * @property {any}                          items               - items to list.
 * @property {any}                          removeId            - controls the ID to be removed.
 */
export abstract class BaseListComponent extends BaseModelComponent implements OnInit {

  /**
   * Items to list.
   *
   * @type {Array}
   */
  protected items: any = [];

  protected columns: any = [];


  /**
   * Total pages of items.
   *
   * @type {number}
   */
  protected totalPages = 1;

  /**
   * Current page of pagination.
   *
   * @type {number}
   */
  protected currentPage = 1;

  /**
   * Current column of ordering.
   *
   * @type {String}
   */
  protected currentColumn: String;

  /**
   * Current sort of ordering.
   *
   * @type {String}
   */
  protected currentSort: String;

  /**
   * Current text of search.
   *
   * @type {String}
   */
  protected currentSearch: String;

  /**
   * Current number of paginate.
   *
   * @type {number}
   */
  protected currentPageSize = 10;

  /**
   * Current object of filter.
   *
   * @type {String}
   */
  protected currentFilter: Array<any> = [];

  /**
   * Constructor.
   */
  constructor() {
    super();
  }

  /**
   * On Init of the component.
   *
   * List all items by default.
   */
  ngOnInit(): void {
    super.ngOnInit();

    this.listItems();
  }

  /**
   * Gets all items and fills the list.
   */
  listItems(): void {
    this.service.search(this.getServiceURL(), this.getPaginationParams(), this.currentFilter).subscribe(result => {
      this.totalPages = result.totalPages;
      this.items = result.items;
      this.columns = result.columns;

      this.postResult();
    });
  }

  /**
   * Executes after the result of list items.
   */
  protected postResult(): void {

  }

  /**
   * When the page of pagination changes, executes
   * this method.
   *
   * @param {number} page
   */
  onChangePage(page): void {
    this.currentPage = page;

    this.listItems();
  }

  /**
   * When key search field, executes
   * this method.
   */
  onSearch(event): void {
    const newSearch = event.search;
    this.currentFilter = event.filter;
    if (newSearch !== this.currentSearch) {
      this.currentPage = 1;
    }
    this.currentSearch = event.search;
    this.listItems();
  }

  /**
   * When the ordering changes, executes
   * this method.
   *
   * @param {column: String, sort: String} ordering
   */
  onChangeSort(ordering: { column: String, sort: String }): void {
    this.currentColumn = ordering.column;
    this.currentSort = ordering.sort;
    this.listItems();
  }

  /**
   * Set the size of the page.
   *
   * @param {size: number}
   */
  public setPageSize(size: number) {
    this.currentPageSize = size;
    this.listItems();
  }

  /**
   * Gets the parameters for pagination.
   *
   * @returns {Object}
   */
  protected getPaginationParams() {
    return {
      currentPage: this.currentPage,
      pageSize: this.currentPageSize,
      column: this.currentColumn,
      sort: this.currentSort,
      search: this.currentSearch
    };
  }

}

