import { isMatch } from './is-match.function';

describe('isMatch', () => {
  function assertMatch(expected: boolean, test: string, pattern: string) {
    // Arrange
    // Act
    const actual = isMatch(test, pattern);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should not match (e1).', () => {
    assertMatch(false, 'aa', 'a');
  });

  it('should not match (e2).', () => {
    assertMatch(false, 'mississippi', 'mis*is*p*.');
  });

  it('should not match (e3).', () => {
    assertMatch(false, 'a', '');
  });

  it('should match (e1).', () => {
    assertMatch(true, 'aa', 'a*');
  });

  it('should match (e2).', () => {
    assertMatch(true, 'ab', '.*');
  });

  it('should match (e3).', () => {
    assertMatch(true, 'aab', 'c*a*b');
  });

  it('should match (e4).', () => {
    assertMatch(true, 'mississippi', 'mississippi');
  });

  it('should match (e5).', () => {
    assertMatch(true, 'aaaba', 'a*ab.');
  });

  it('should match (e6).', () => {
    assertMatch(true, '', '.*');
  });

  it('should match (e7).', () => {
    assertMatch(true, 'mississippi', 'mi..i..i.pi');
  });

  it('should match (e8).', () => {
    assertMatch(true, 'aaa', 'ab*a*c*a');
  });
});
