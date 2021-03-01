enum Language {
  Korean = 'ko',
  English = 'en',
  Japanese = 'jp',
}

function getEnumLength(enumObject: any): number {
  const keys = Object.keys(enumObject);
  return keys.reduce(
    (acc, key) => (typeof enumObject[key] === 'string'
      ? acc + 1
      : acc
    ),
    0
  );
}

console.log(getEnumLength(Language));
