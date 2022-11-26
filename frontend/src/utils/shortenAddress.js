export function shortenAddress(address) {
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
}
