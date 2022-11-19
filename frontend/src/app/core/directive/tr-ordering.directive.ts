import { AfterViewInit, Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrOrdering]'
})
export class TrOrderingDirective implements AfterViewInit {

  @Output() sortChanged = new EventEmitter<any>();

  ths: any;
  selectHead: String;

  constructor(private elem: ElementRef, private renderer: Renderer2) {
  }

  addClassForAllThHeads(cssClass) {
    for (let th of this.ths) {
      this.renderer.addClass(th, cssClass);
    }
  }

  addOnClickThHeads() {
    for (let th of this.ths) {
      this.renderer.listen(th, 'click', (ev) => {

        this.removeClassForAllThHeads('active');
        this.removeClassForAllThHeads('sorting_asc');
        this.removeClassForAllThHeads('sorting_desc');
        this.renderer.addClass(th, 'active');
        const sortable = th.getAttribute('sortable');
        let sort = 'asc';

        if (this.selectHead !== sortable) {
          this.renderer.addClass(th, 'sorting_asc');
          this.selectHead = sortable;
        } else {
          this.renderer.addClass(th, 'sorting_desc');
          this.selectHead = null;
          sort = 'desc';
        }
        this.sortChanged.emit({column: sortable, sort: sort});
      });
    }
  }

  removeClassForAllThHeads(cssClass) {
    for (let th of this.ths) {
      this.renderer.removeClass(th, cssClass);
    }
  }

  ngAfterViewInit() {
    this.ths = this.elem.nativeElement.querySelectorAll('th[sortable]');
    this.addClassForAllThHeads('sorting');
    this.addOnClickThHeads();
  }

}
