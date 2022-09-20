import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServicesComponent } from './delete-services.component';

describe('DeleteServicesComponent', () => {
  let component: DeleteServicesComponent;
  let fixture: ComponentFixture<DeleteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
