import useHttp from "../../hooks/useHttp";

// 接口
export const getData = (data) => {
  return useHttp({
    url: "login",
    method: "get", //get | post
    params: data,
  });
};

export const test = (data) => {
  return useHttp({
    url: "/core/aaa.json",
    method: "get", //get | post
    params: data,
  });
};

export const zhoutailun = (data) => {
  return useHttp({
    url: "/common/employees/list/" + data.currentPage + "/" + data.pageSize,
    method: "post", //get | post
    params: {},
  });
};
