import { lookAndSay } from './look-and-say.function';

describe('LookAndSay', () => {
  function assertSays(expected: string, input: any) {
    // Arrange
    // Act
    const actual = lookAndSay(input);
    // Assert
    expect(actual).toEqual(expected);
  }

  it('should say the number of continuous characters.', () => {
    assertSays('312415', 111445);
  });

  it('should say nothing if nothing is passed.', () => {
    assertSays('', null);
  });
});
