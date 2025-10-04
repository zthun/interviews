/**
 * The standard welcome message.
 */
export const WelcomeMessage = 'Welcome to interviews.  You can use this to demo interview code or as a starting point for TypeScript development.';

/**
 * Prints a welcome message.
 *
 * @param logger The logger to print to.
 *
 * @returns The welcome message printed.
 */
export function welcome(logger: Console) {
  logger.log(WelcomeMessage);
  return WelcomeMessage;
}
