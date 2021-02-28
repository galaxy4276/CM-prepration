// https://www.daleseo.com/jest-fn-spy-on/
/*
  mocking 이란?

  mocking 은 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법을 말합니다.
  일반적으로 테스트하려는 코드가 의존하는 부분을 직접 생성하기가 너무 부담스러운 경우 mocking 이 많이 사용됩니다.
 */

const mockFn = jest.fn();

describe('목업 테스트',() => {
  it('mockFn return undefined', () => {
    expect(mockFn()).toBe(undefined);
  });

  it('mock can return number 1', () => {
    mockFn.mockReturnValue(1);
    expect(mockFn()).toBe(1);
  });

  it('let`s mock implementation', () => {
    mockFn.mockImplementation((name: string) => ({
      id: 1,
      name,
      class: '컴퓨터공학실 3-1',
    }));

    expect(mockFn('최은기')).toHaveProperty('name', '최은기');
  });

  it('using jest.spyOn', () => {
    const calculator = { add: (a: number, b: number): number => a + b, };
    const spyFn = jest.spyOn(calculator, 'add');
    const result = calculator.add(2, 3);

    expect(spyFn).toBeCalledTimes(1);
    expect(spyFn).toBeCalledWith(2, 3);
    expect(result).toBe(5);
  });
});
