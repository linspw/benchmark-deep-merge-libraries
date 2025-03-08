import { bench, describe } from "vitest";
import merge from "lodash.merge";
import * as tsdeepmerge from "ts-deepmerge";
import { deepmerge } from "deepmerge-ts";
import { mergeDeepRight } from "ramda";
// import { copyWithStructuralSharing } from "@reduxjs/toolkit/query";
// import { mergeDeep } from "./mergeDeep";

const alice = {
  name: "alice",
  color: "blue",
  address: {
    street: "2 some rd",
    city: "Brooklyn",
    state: "New York",
    zipcode: "10002",
  },
};

const bob = {
  name: "bob",
  age: 30,
  address: {
    city: "New York",
    state: "New York",
    zipcode: "10001",
  },
};

const carl = {
  name: "bob",
  color: "blue",
  address: {
    street: "2 some rd",
    city: "New York",
    state: "New York",
    zipcode: "10001",
  },
  age: 30,
};


const customMerge = (itemA: any, itemB: any) => {
  return {
    ...itemA,
    ...itemB,
    address: { ...itemA?.address, ...itemB?.address },
  };
};

const testCases = [
  { name: "Case 1: Simple objects", inputs: [alice, bob] },
];

const functionsToCompare = [
  { name: "lodash.merge", run: merge },
  // { name: "mergeDeep", run: mergeDeep },
  // { name: "copyWithStructuralSharing", run: copyWithStructuralSharing },
  { name: "ts-deepmerge", run: tsdeepmerge.merge },
  { name: "deepmerge-ts", run: deepmerge },
  { name: "ramda.mergeDeepRight", run: mergeDeepRight },
  { name: "customMerge", run: customMerge },
];

describe.each(testCases)('$name', ({ name, inputs }) => {
  functionsToCompare.forEach(({ name: fnName, run }) => {
    bench(`${fnName}`, () => {
      run(...inputs);
    });
  });
})
