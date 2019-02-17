import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2AboutusComponent } from './menu2-aboutus.component';

describe('Menu2AboutusComponent', () => {
  let component: Menu2AboutusComponent;
  let fixture: ComponentFixture<Menu2AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu2AboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu2AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
