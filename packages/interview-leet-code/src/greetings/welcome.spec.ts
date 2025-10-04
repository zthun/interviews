import { noop } from 'lodash';
import { welcome, WelcomeMessage } from './welcome';

describe('Welcome', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(noop);
  });

  it('Prints the welcome message to the logger.', () => {
    // Arrange
    // Act
    welcome(console);
    // Assert
    expect(console.log).toHaveBeenCalledWith(WelcomeMessage);
  });

  it('returns the welcome message.', () => {
    // Arrange
    // Act
    const actual = welcome(console);
    // Assert
    expect(actual).toEqual(WelcomeMessage);
  });
});
