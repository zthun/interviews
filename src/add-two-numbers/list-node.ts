export class ListNode {
  val: number;
  // eslint-disable-next-line no-use-before-define
  next: ListNode;

  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString() {
    if (this.next == null) {
      return this.val.toString();
    }

    return `${this.val}${this.next.toString()}`;
  }
}
