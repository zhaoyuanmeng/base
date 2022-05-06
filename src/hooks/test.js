function test(cb) {
  let res = 1;
  // 宏任务
  setTimeout(aa, 1000);
  return res;
}

function aa() {
  res = 2;
  cb(res);
}

function cb(res) {
  console.log("res--2", res);
}

let res = test(cb);

console.log("res--1", res);
