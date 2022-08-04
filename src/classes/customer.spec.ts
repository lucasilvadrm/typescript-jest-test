import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  const sut = createIndividualCustomer('Lucas', 'Luís', '123456789');
  it('should have fistName, lastName, cpf', () => {
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Luís');
    expect(sut).toHaveProperty('cpf', '123456789');
  });

  it('should show first name and last name', () => {
    expect(sut.getName()).toBe('Lucas Luís');
    expect(sut.getIDN()).toBe('123456789');
  });
});

describe('EnterpriseCustomer', () => {
  const sut = createEnterpriseCustomer('Rchlo', '123321');
  it('should have name and cnpj', () => {
    expect(sut).toHaveProperty('name', 'Rchlo');
  });
  it('should have methods to get name and idn', () => {
    expect(sut.getName()).toBe('Rchlo');
  });
});
