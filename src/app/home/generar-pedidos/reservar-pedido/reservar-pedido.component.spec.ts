import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPedidoComponent } from './reservar-pedido.component';

describe('ReservarPedidoComponent', () => {
  let component: ReservarPedidoComponent;
  let fixture: ComponentFixture<ReservarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
