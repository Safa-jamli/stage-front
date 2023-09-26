import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerModPassComponent } from './changer-mod-pass.component';

describe('ChangerModPassComponent', () => {
  let component: ChangerModPassComponent;
  let fixture: ComponentFixture<ChangerModPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerModPassComponent]
    });
    fixture = TestBed.createComponent(ChangerModPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
