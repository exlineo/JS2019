import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionGalerieComponent } from './edition-galerie.component';

describe('EditionGallerieComponent', () => {
  let component: EditionGalerieComponent;
  let fixture: ComponentFixture<EditionGalerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionGalerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
