import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //limpar mocks depois dos testes
  it('should have no discount', () => {
    //system under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    //system under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(13.12)).toBeCloseTo(6.56);
  });

  it('should apply 10% discount on price', () => {
    //system under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(90);
  });
});
