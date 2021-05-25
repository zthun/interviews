/* eslint-disable require-jsdoc */
export class ListNode {
  val: number;
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
