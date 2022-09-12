import { typeColours } from "./Constants";

export function getTypeColour(typeName) {
  return typeColours[typeName];
}

export function deciToCenti(value) {
  return value * 10;
}

export function hectoToKilo(value) {
  return value * 0.1;
}

export function padLeadingZeros(num, size) {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s;
}
