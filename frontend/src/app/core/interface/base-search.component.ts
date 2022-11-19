import { ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppInjector } from '../../app.injector';

export abstract class SearchComponent implements OnInit {

  @Output() keySearch = new EventEmitter<any>();
  @Output() searchSubmit = new EventEmitter<any>();
  @ViewChild('dropdownToggle') menu: ElementRef;

  protected formBuilder: FormBuilder = AppInjector.get(FormBuilder);
  protected searchForm: FormGroup;
  protected currentSearch: String;

  ngOnInit() {
    this.initForm();
  }

  onKeySearch(): void {
    this.initForm();
    this.keySearch.emit({filter: [], search: this.currentSearch});
  }

  initForm(): void {
    this.searchForm = this.formBuilder.group(
      this.getFormControls()
    );
  }

  onClear(): void {
    this.submitEndCloseMenu([]);
    this.initForm();
  }

  onSearchSubmit(): void {
    const formValue = this.searchForm.value;
    const filter: Array<{ field: String, value: Object, comparison: String }> = [];

    Object.keys(formValue).forEach((key) => {
      const value = formValue[key];
      if ((value && value !== '') || value === false) {
        filter.push(this.getFilter(key, value, 'EQ'));
      }
    });
    this.submitEndCloseMenu(filter);
  }

  getFilter(field, value, comparison): { field: String, value: Object, comparison: String } {
    return {
      field: field, value: value, comparison: comparison
    };
  }

  getFormControls(): Object {
    return {};
  }

  submitEndCloseMenu(filter): void {
    this.currentSearch = '';
    this.searchSubmit.emit({filter: filter, search: this.currentSearch});
  }

}
