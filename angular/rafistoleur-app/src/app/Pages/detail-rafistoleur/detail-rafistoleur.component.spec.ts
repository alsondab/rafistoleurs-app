import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRafistoleurComponent } from './detail-rafistoleur.component';

describe('DetailRafistoleurComponent', () => {
  let component: DetailRafistoleurComponent;
  let fixture: ComponentFixture<DetailRafistoleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRafistoleurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRafistoleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
