import { queryString } from './queryString';
import { parse } from './queryString';

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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Raul&profession=Tester';
    expect(parse(qs)).toEqual({
      name: 'Raul',
      profession: 'Tester',
    });
  });

  it('should convert a query string of a single key-value object ', () => {
    const qs = 'name=Raul';
    expect(parse(qs)).toEqual({
      name: 'Raul',
    });
  });

  it('should convert a query string taking care of comma ', () => {
    const qs = 'name=Raul&skills=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Raul',
      skills: ['JS', 'TDD'],
    });
  });
});
