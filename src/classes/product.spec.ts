import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks()); //limpar mocks depois dos testes
  it('should have properties name and price', () => {
    //system under test
    const sut = createSut('notebook', 3500);
    expect(sut).toHaveProperty('name', 'notebook');
    expect(sut.price).toBeCloseTo(3500); //testar valores de ponto flutuante
  });
});
