export class ListNode {
  val: number;
  // eslint-disable-next-line no-use-before-define
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrayToList(values: number[]) {
  const start = new ListNode();
  let builder = start;

  values.forEach((num) => {
    builder.next = new ListNode(num);
    builder = builder.next;
  });

  return start.next;
}

export function listToArray(head: ListNode) {
  const arr = [];

  let trace = head;

  while (trace != null) {
    arr.push(trace.val);
    trace = trace.next;
  }

  return arr;
}
