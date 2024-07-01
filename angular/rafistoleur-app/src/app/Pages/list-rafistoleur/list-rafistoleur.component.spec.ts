import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRafistoleurComponent } from './list-rafistoleur.component';

describe('ListRafistoleurComponent', () => {
  let component: ListRafistoleurComponent;
  let fixture: ComponentFixture<ListRafistoleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRafistoleurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRafistoleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
