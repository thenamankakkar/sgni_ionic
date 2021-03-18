import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquiremodalPage } from './enquiremodal.page';

describe('EnquiremodalPage', () => {
  let component: EnquiremodalPage;
  let fixture: ComponentFixture<EnquiremodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiremodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquiremodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
