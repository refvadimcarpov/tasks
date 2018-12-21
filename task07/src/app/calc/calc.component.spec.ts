import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

/**
 * Load the implementations that should be tested
 */
import { CalcComponent } from './calc.component';
import { AppState } from './../app.service';

describe(`Calc`, () => {
  let comp: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  /**
   * async beforeEach
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppState]
    })
    /**
     * Compile template and css
     */
    .compileComponents();
  }));

  /**
   * Synchronous beforeEach
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    comp    = fixture.componentInstance;

    /**
     * Trigger initial data binding
     */
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
