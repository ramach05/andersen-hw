
const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", country: "Canada" };

const mergeObjects = <T extends Record<string, any>, U extends Record<string, any>>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
}

const res = mergeObjects(obj1, obj2);