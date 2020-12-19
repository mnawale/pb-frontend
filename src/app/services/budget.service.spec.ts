import { TestBed , inject} from '@angular/core/testing';
import { BudgetService } from './budget.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserBudget } from '../models/User_budget';

describe('BudgetService', () => {
  let service: BudgetService;
  let httpMock: HttpTestingController;

  // tslint:disable-next-line: prefer-const
  let userId: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetService]
    });

    service = TestBed.inject(BudgetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve posts from the API via GET', () => {
    const sampleBudgets: UserBudget[] = [{
      id: 1,
      userId: 1,
      title: 'travelling ',
      value: 100,
      month: 'december',
      tags: 'test',
      amount: 100
    }];
    service.fetchBudgetUser(userId).subscribe(budgets => {
      expect(budgets.length).toBe(1);
      expect(budgets).toEqual(sampleBudgets);
    });
    const request = httpMock.expectOne(`${service.endpoint}`);
    expect(request.request.method).toBe('GET');
    request.flush(sampleBudgets);
  });
});

