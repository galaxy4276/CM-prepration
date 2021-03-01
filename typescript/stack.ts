class Stack<D> {
  private items: D[] = [];

  push(item: D) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();
