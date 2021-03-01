const makeArray = <T>(defaultValue: T, size: number): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < size; i++)
    arr.push(defaultValue);
  return arr;
};

console.log(makeArray<string>('empty', 10));
