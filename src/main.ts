import { logger } from './logger';

const DEFAULT_COPIES = 2;

/**
 * @description copies a message
 * @param copies number of times to copy the message
 * @param message the message to copy
 * @returns the message repeated
 */
async function repeatString(
  copies: number = DEFAULT_COPIES,
  message: string,
): Promise<string> {
  return message.repeat(copies);
}

export async function sayHi(): Promise<string> {
  const COPIES = 3;
  const output: Awaited<ReturnType<typeof repeatString>> = await repeatString(
    COPIES,
    'hi',
  );

  await repeatString(
    undefined,
    'hi',
  );

  //debugger;
  logger.debug(`calling repeatString with ${COPIES}`);
  return output;
}
