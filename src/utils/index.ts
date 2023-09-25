export function shortAddress(
  address: string,
  firstCharacter: number,
  lastCharacter: number
): string {
  return `${address.slice(0, firstCharacter)}...${address.slice(
    -lastCharacter
  )}`;
}
