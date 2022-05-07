export const buildTree = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        type: item.type,
        projectId: item.projectId,
        children: [],
        colData: item,
        scopedSlots: { title: "title" },
        ...item,
      };
      buildTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};
export const getSpecialTaskBuildTree = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        projectId: item.projectId,
        children: [],
        // isArg: item.isArg,
        colData: item,
        scopedSlots: { title: "title" },
        ...item,
      };
      getSpecialTaskBuildTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};
export const noSelectParentTree = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        children: [],
        colData: item,
        selectable: false,
        scopedSlots: { title: "title" },
      };
      noSelectParentTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
        child["selectable"] = true;
      }
      arr.push(child);
    }
  });
};
export const buildDisableTree = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        children: [],
        colData: item,
        disableCheckbox: item.disableCheckbox,
        scopedSlots: { title: "title" },
      };
      buildDisableTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};
export const buildAreaTree = (list, arr = [], parentId = 1) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        children: [],
        colData: item,
        scopedSlots: { title: "title" },
      };

      buildTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};

export const buildAreaTree2 = (list, arr2 = [], parentId = 2) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        children: [],
        colData: item,
        scopedSlots: { title: "title" },
      };

      buildTree(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr2.push(child);
    }
  });
};

export const buildTreeFlag = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.parentId == parentId) {
      var child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        selectable: item.parentFlag == "false",
        children: [],
        colData: item,
        scopedSlots: { title: "title" },
      };
      buildTreeFlag(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};
export const buildTree1 = (list, arr = [], parentId = 0) => {
  list.forEach((item) => {
    if (item.pId === parentId) {
      const child = {
        key: item.id,
        value: item.id + "",
        title: item.name,
        name: item.name,
        children: [],
      };
      buildTree1(list, child.children, item.id);
      if (child.children.length === 0) {
        child["is-leaf"] = true;
      }
      arr.push(child);
    }
  });
};

// 通用下载方法
export function download(fileName) {
  window.location.href =
    process.env.VUE_APP_API_BASE_URL +
    "/commonfile/download?fileName=" +
    encodeURI(fileName) +
    "&delete=" +
    true;
}

// 定义一个深拷贝函数  接收目标target参数
export const deepClone = (target) => {
  // 定义一个变量
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === "object") {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (const i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]));
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (const i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
};

/*
 *@Author: 赵元达
 *@Date: 2022-04-20 08:58:42
 *@parms:
 *@Description: 一维数组转树
 */
// 后端需要传过来的一维数组数据
var data1 = [
  { id: 40, parentId: 0, note: "一级菜单-1", parentIds: [0] },
  { id: 20, parentId: 0, note: "一级菜单-2", parentIds: [0] },
  { id: 22, parentId: 20, note: "二级菜单-22", parentIds: [0, 20] },
  { id: 24, parentId: 22, note: "三级菜单-24", parentIds: [0, 22] },
  { id: 34, parentId: 22, note: "三级菜单-34", parentIds: [0, 22] },
];

// 这个不常用 通过parentIds
export function treeByParentIds(data) {
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

// 这个转树比较常用
export const useArrayToTree = (data, parent) => {
  var tree = [];
  var temp;
  for (var i = 0; i < data.length; i++) {
    if (data[i].parentId == parent) {
      var obj = data[i];
      temp = useArrayToTree(data, data[i].id);
      if (temp.length > 0) {
        obj.children = temp;
      }
      tree.push(obj);
    }
  }
  return tree;
};
