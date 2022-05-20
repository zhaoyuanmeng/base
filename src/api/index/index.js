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
