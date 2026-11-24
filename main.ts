import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'I waved at the driverless taxi, and it waved back with my hand.';
if (line.length < 1 || line.length > 200 || /[\r\n]/.test(line)) {
  throw new Error('The entry must be a single line of 1–200 characters.');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${line}\n`, 'utf8');
