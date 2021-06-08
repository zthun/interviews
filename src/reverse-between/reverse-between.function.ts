import { ListNode } from './list-node.class';

export function reverseBetween(head: ListNode, left: number, right: number): ListNode {
  const begin = new ListNode(null, head);

  let start = head;
  let prev = begin;

  for (let s = 1; s < left; ++s) {
    start = start.next;
    prev = prev.next;
  }

  let end = start;
  const stack = [start];

  for (let e = 0; e < right - left; ++e) {
    end = end.next;
    stack.push(end);
  }

  const last = end.next;

  while (stack.length) {
    const top = stack.pop();
    prev.next = top;
    prev = top;
  }

  prev.next = last;
  return begin.next;
}
