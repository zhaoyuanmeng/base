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

// let res = test(cb);

// console.log("res--1", res);
let res = [];

var data1 = [
  { id: 40, parentId: 0, note: "一级菜单-1", parentIds: [0] },
  { id: 20, parentId: 0, note: "一级菜单-2", parentIds: [0] },
  { id: 22, parentId: 20, note: "二级菜单-22", parentIds: [0, 20] },
  { id: 24, parentId: 22, note: "三级菜单-24", parentIds: [0, 20, 22] },
  { id: 34, parentId: 22, note: "三级菜单-34", parentIds: [0, 20, 22] },
];

data1.map((item) => {
  // 处理一级菜单
  if (item.parentIds[0] == 0 && item.parentIds.length == 1) {
    // 说明这第一层
    res.push({ ...item, children: [] });
  }
  // 大于两层的
  if (item.parentIds.length >= 2) {
    res = res.map((it) => {
      if (it.id == item.parentIds[1]) {
        if (item.parentIds.length == 2) {
          it.children.push({ ...item });
        }
        // 说明是三层的
        if (item.parentIds.length == 3) {
          it.children = it.children.map((aa) => {
            if (item.parentIds[2] == aa.id) {
              if (!aa.children) {
                aa.children = [];
              }
              aa.children.push({ ...item });
            }
            return aa;
          });
        }
      }
      console.log("it", it);
      return it;
    });
  }
});

function tree(data) {
  let res = [];
  data.map((item) => {
    // 处理一级菜单
    if (item.parentIds[0] == 0 && item.parentIds.length == 1) {
      // 说明这第一层
      res.push({ ...item, children: [] });
    }
    // 大于两层的
    if (item.parentIds.length >= 2) {
      res = res.map((it) => {
        if (it.id == item.parentIds[1]) {
          if (item.parentIds.length == 2) {
            it.children.push({ ...item });
          }
          // 说明是三层的
          if (item.parentIds.length == 3) {
            it.children = it.children.map((aa) => {
              if (item.parentIds[2] == aa.id) {
                if (!aa.children) {
                  aa.children = [];
                }
                aa.children.push({ ...item });
              }
              return aa;
            });
          }
        }
        console.log("it", it);
        return it;
      });
    }
  });
  return res;
}

console.log("res", tree(data1));
