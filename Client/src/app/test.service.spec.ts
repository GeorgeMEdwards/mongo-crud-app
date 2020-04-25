import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  // setup service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should have add function',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should add correctly' ,
  inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));
  it('should be created', 
  inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          name: 'Luke',
          position: 'Partner',
          office: 'Berlin',
          salary: '80000'
        },
        {
          name: 'Nelson',
          position: 'Supervisor',
          office: 'Frankfurt',
          salary: '95000'
        },
        {
          name: 'Amy Lee',
          position: 'Manager',
          office: 'Bonn',
          salary: '90000'
        },
        {
          name: 'Miroslav',
          position: 'CEO',
          office: 'Cologne',
          salary: '120000'
        }
      ];
    
      let response;
      inject([TestService], (service: TestService) => {
      spyOn(service, 'all').and.returnValue(userResponse);

      service.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
          name: 'Amy Lee',
          position: 'Manager',
          office: 'Bonn',
          salary: '90000'
      };
      let response;
      inject([TestService], (service: TestService) => {
      spyOn(service, 'findOne').and.returnValue(userResponse);

      service.findOne('2').subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
});

});
});
});
