import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu1AboutusComponent } from './menu1-aboutus.component';

describe('Menu1AboutusComponent', () => {
  let component: Menu1AboutusComponent;
  let fixture: ComponentFixture<Menu1AboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu1AboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu1AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
