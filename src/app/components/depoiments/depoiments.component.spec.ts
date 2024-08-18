import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentsComponent } from './depoiments.component';

describe('DepoimentsComponent', () => {
  let component: DepoimentsComponent;
  let fixture: ComponentFixture<DepoimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepoimentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
