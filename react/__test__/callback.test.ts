
function fetchUser (id: number, cb: Function) {
  setTimeout(() => {
    console.log('wait  1 sec.');
    const user = {
      id,
      name: 'User' + id,
      email: id + '@test.com',
    };
    cb(user);
  }, 1000);
}

describe('콜백함수 테스트', () => {
  // Jest Runner 는 테스트 함수를 가능한 한 최대한 빠르게 호출해 준다.
// 즉 아래 함수에서는 콜백 함수가 호출될 기회조차 얻지 못한다.
  it('fetch a user', (done) => {
    fetchUser(2, (user: object) => {
      expect(user).toEqual({
        id: 1,
        name: 'User1',
        email: '1@test.com'
      });
      done();
    });
  });

// Jest Runner 에게 명시적으로 테스트 함수 콜백함수가 존재한다는 것을 알릴 수 있다.
  test('Normally fetch a user', (done) => {
    fetchUser(2, (user: object) => {
      expect(user).toEqual({
        id: 2,
        name: 'User2',
        email: '2@test.com',
      });
      done();
    });
  });
});
