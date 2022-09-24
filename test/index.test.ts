import { sum } from '../src/index';

describe('sum 求和方法:', () => {
  test('场景1: 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('场景2: 1 + 1 != 3', () => {
    expect(sum(1, 1)).not.toBe(3);
  });
});
