import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorService } from '../administrador.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';
import { AdministradorListComponent } from './administrador-list.component';

describe('AdministradorListComponent', () => {
  let component: AdministradorListComponent;
  let fixture: ComponentFixture<AdministradorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
