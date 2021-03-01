interface GetInfoText {
  (name: string, age: number): string;
  totalCall: number;
}

const getInfoText: GetInfoText = (name, age) => {
  getInfoText.totalCall += 1;
  console.log(`totalCall: ${getInfoText.totalCall}`);
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return `name: ${nameText}, age: ${ageText}`;
};

getInfoText.totalCall = 0;

console.log(getInfoText('최은기', 35));
