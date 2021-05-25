/* eslint-disable require-jsdoc */

import { ListNode } from './list-node';

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  function addDigits(x: ListNode, y: ListNode, c: 0 | 1): [ListNode, 0 | 1] {
    const r = x.val + y.val + c;

    if (r >= 10) {
      return [new ListNode(r - 10), 1];
    }

    return [new ListNode(r), 0];
  }

  let c: 0 | 1 = 0;
  let n1 = l1;
  let n2 = l2;
  const first = new ListNode();
  let digit = first;

  while (n1 != null || n2 != null || c === 1) {
    if (n1 == null) {
      n1 = new ListNode();
    }

    if (n2 == null) {
      n2 = new ListNode();
    }

    [digit.next, c] = addDigits(n1, n2, c);
    n1 = n1.next;
    n2 = n2.next;
    digit = digit.next;
  }

  return first.next;
}
