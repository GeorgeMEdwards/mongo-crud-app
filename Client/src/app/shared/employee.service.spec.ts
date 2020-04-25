import { TestBed, inject } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let  employeeService : EmployeeService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });

    employeeService = TestBed.get(EmployeeService);
  });
  /*
  it('should be created', () => {
    expect(EmployeeService).toBeTruthy();
  });
  */
  });
