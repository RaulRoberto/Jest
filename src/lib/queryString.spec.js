const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Raul',
      profession: 'Tester',
    };
    // queryString(obj)
    expect(queryString(obj)).toBe('name=Raul&profession=Tester');
  });

  it('should create a valid uery string even when an array is passed as value', () => {
    const obj = {
      name: 'Raul',
      skills: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Raul&skills=JS,TDD');
  });

  it('should throw an error whe an object is passed as value', () => {
    const obj = {
      name: 'Raul',
      skills: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
