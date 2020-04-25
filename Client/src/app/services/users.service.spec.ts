import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.get(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

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
          name: 'Luke',
          position: 'Partner',
          office: 'Berlin',
          salary: '80000'
        }
      ];
      let response;
      
      spyOn(usersService, 'all').and.returnValue(userResponse);

  });
  

 /* 
  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
          name: 'Nelson',
          position: 'Supervisor',
          office: 'Frankfurt',
          salary: '95000'
      }
      let response;

     spyOn(usersService,'findOne').and.returnValue(userResponse);
     usersService.findOne('2').subscribe(res => {
        response = res;
      });
      expect(response).toEqual(userResponse);
   */ 
  });
}); 

