import useHttp from "../../hooks/useHttp";

// 接口
export const getData = (data) => { 
  return useHttp({
    url:'',
    method:'', //get | post
    params:data
  })
}

