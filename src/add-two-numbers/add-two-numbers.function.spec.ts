import { addTwoNumbers } from './add-two-numbers.function';
import { ListNode } from './list-node';

describe('AddTwoNumbers', () => {
  function assertAddsTwoNumbers(expected: ListNode, x: ListNode, y: ListNode) {
    // Arrange
    const wanted = expected.toString();
    // Act
    const actual = addTwoNumbers(x, y).toString();
    // Assert
    expect(actual).toEqual(wanted);
  }

  it('should add two numbers together (e1).', () => {
    const x = new ListNode(2, new ListNode(4, new ListNode(3)));
    const y = new ListNode(5, new ListNode(6, new ListNode(4)));
    const e = new ListNode(7, new ListNode(0, new ListNode(8)));
    assertAddsTwoNumbers(e, x, y);
  });

  it('should add two numbers together (e2).', () => {
    const x = new ListNode(0);
    const y = new ListNode(0);
    const e = new ListNode(0);
    assertAddsTwoNumbers(e, x, y);
  });

  it('should add two numbers together (e3).', () => {
    const x = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const y = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const e = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    assertAddsTwoNumbers(e, x, y);
  });
});
