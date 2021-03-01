class Stacks<D> {
  private _lists: D[] = [];

  get lists(): D[] { return this._lists; }

  push(item: D) { this._lists.push(item); }
  pop(item: D) { this._lists.pop(); }
}


// two type function
function toPair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const arrowToPair = <T, U>(a: T, b: U): [T, U] => {
  return [a, b];
};

function getFirst<T extends Stacks<U>, U>(container: T): U {
  const item = container.pop();
  container.push(item);
  return item;
}

console.log(toPair<number, string>(5, '은기'));
