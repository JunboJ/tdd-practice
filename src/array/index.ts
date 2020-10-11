const { throws } = require('assert');

/* eslint-disable implicit-arrow-linebreak */
const checkArray = (
  array: number[],
  val: number,
): { greater: number; less: number; equal: number } => {
  let greater = 0;
  let less = 0;
  let equal = 0;
  if (Array.isArray(array)) {
    array.forEach((v) => {
      if (v < val) less += 1;
      if (v > val) greater += 1;
      if (v === val) equal += 1;
    });
    return {
      greater,
      less,
      equal,
    };
  }
  throw new Error('param 1 should be an array');
};

const isAlbertHere = (array: any[]): boolean => {
  let result: boolean = false;
  if (Array.isArray(array)) {
    for (const v of array) {
      if (v === 'albert') result = true;
    }
  }
  return result;
};

const findAllBoys = (array: { name: string; gender: string }[]) => {
  const boys = [];
  if (array.length > 0) {
    for (const p of array) {
      if (p.gender === 'M') boys.push(p.name);
    }
    return boys;
  } else {
    throw new Error('empty array given');
  }
};

const copyArray = (array: any[]) => {
  const result = [];
  for (const item of array) {
    if (typeof item === 'object') {
      const newObj = { ...item };
      result.push(newObj);
    } else {
      result.push(item);
    }
  }
  return result;
};

const countBoysAndGirls = (array: { name: string; gender: string }[]) => {
  const obj = {
    boys: 0,
    girls: 0,
  };
  if (array.length > 0) {
    for (const item of array) {
      if (item.gender === 'M') obj.boys += 1;
      if (item.gender === 'F') obj.girls += 1;
    }
  }
  return obj;
};

const editItemInArray = (
  array: { id: number; name: string; gender: string; [key: string]: string | number | undefined}[],
  i: number,
  obj: { id?: number; name?: string; gender?: string; [key: string]: string | number | undefined},
) => {
  const index = i - 1;
  if (array.length > 0) {
    const updatedArray = array.map((o, n) => {
      if (n === index) {
        const updatedObj = { ...o };
        for (const [index, value] of Object.entries(obj)) {
          updatedObj[index] = obj[index];
        }
        return updatedObj;
      } else {
        return o;
      }
    });
    return updatedArray;
  } else {
    throw new Error('empty array given');
  }
};

exports.checkArray = checkArray;
exports.isAlbertHere = isAlbertHere;
exports.findAllBoys = findAllBoys;
exports.copyArray = copyArray;
exports.countBoysAndGirls = countBoysAndGirls;
exports.editItemInArray = editItemInArray;
