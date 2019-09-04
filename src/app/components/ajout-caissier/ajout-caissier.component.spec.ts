import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCaissierComponent } from './ajout-caissier.component';

describe('AjoutCaissierComponent', () => {
  let component: AjoutCaissierComponent;
  let fixture: ComponentFixture<AjoutCaissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCaissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCaissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
