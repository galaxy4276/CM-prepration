const repeat = (word: string, times: number = 2): string[] => {
  let words = [];
  for (let i = 0; i < times; i++) words.push(word);
  return words;
};

const repeatStr = (word: string, times: number = 2): string => {
  let words = [];
  for (let i = 0; i < times; i++) words.push(word);
  return words.join('');
};

describe("Snapshot Test", () => {
  it("repeats words three times", () => {
    expect(repeat("test", 3)).toMatchInlineSnapshot(`
      Array [
        "test",
        "test",
        "test",
      ]
    `);
  });
});
