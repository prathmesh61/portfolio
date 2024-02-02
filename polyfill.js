// map
const names = ["pratham", "pooja", "namdev"];
const num = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

// names.myMap((item, i, arr) => console.log(item, i, arr));

// filter
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// console.log(num.myFilter((item, i, arr) => item >= 4));

// foreach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
// console.log(num.myForEach((item, i, arr) => console.log(item)));

// reduce
Array.prototype.myReduce = function (cb, initVal = null) {
  let acc = initVal;
  let arr = Array.from(this); // Convert to array
  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      acc = cb(acc, arr[i], i, arr);
    }
  }
  return acc;
};
// console.log(num.myReduce((acc, curr, i) => acc + curr, 0));

// bind
Function.prototype.MyBind = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("context must be a function");
  }
  this.fn = obj;
  return function (...newArgs) {
    obj.fn(...args, ...newArgs);
  };
};
// Call
let obj = {
  name: "Nitin",
};

function myFun(id) {
  return console.log(`${this.name},  this is my ${id}`);
}
Function.prototype.MyCall = function (obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

console.log(myFun.MyCall(obj, "80907"));
