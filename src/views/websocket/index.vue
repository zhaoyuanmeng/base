<template>
  <div>测试websocket</div>
  <button @click="onConnect" ref="connect">连接</button>
  <button @click="onSend" ref="send" disabled>发送</button>
  <button @click="onClose" ref="close" disabled>关闭</button>
</template>

<script setup>
// ======================书写整洁代码==========================//

// ====================引入模块部分=============================//
import { ref } from "vue";
// ====================变量声明部分=============================//
const name = "test"; //连接用户名
let wsUrl = "ws://127.0.0.1:1024/ws/?name=" + name;
let connect = ref(null);
let send = ref(null);
let close = ref(null);
let ws;

// ====================逻辑事件交互部分 ============================//

const onConnect = () => {
  if (!ws) {
    //第一次执行，初始化或ws断开时可执行
    ws = new WebSocket(wsUrl);
    initWebSocket();
  }
};
const onClose = () => {
  console.log("close");
  ws.close();
  ws = null;
};
const onSend = () => {
  console.log("send");
  ws.send(
    JSON.stringify({
      ModeCode: "message",
      msg: "hello",
    })
  );
};

// ====================请求接口数据 ============================//

// ====================其他============================//
function initWebSocket() {
  ws.onopen = function (e) {
    setButtonState("open");
    console.log("开启");
  }; //连接上时回调
  ws.onclose = function (e) {
    setButtonState("close");
    console.log("关闭");
  }; //断开连接时回调
  ws.onmessage = function (e) {
    let blob = e.data;
    blobToObj(blob, (res) => {
      console.log("得到的数据是", res);
    });
  }; //收到服务端消息
  ws.onerror = function (e) {
    setButtonState("close");
    console.log("出错");
  }; //连接出错
}
/*
 * 设置按钮是否可点击
 * @param state：open表示开启状态，close表示关闭状态
 */
function setButtonState(state) {
  switch (state) {
    case "open":
      connect.value.disabled = true;
      send.value.disabled = false;
      close.value.disabled = false;
      break;
    case "close":
      connect.value.disabled = false;
      send.value.disabled = true;
      close.value.disabled = true;
      break;
  }
}

//采用回调的方式
function blobToObj(blob, callBack) {
  console.log("blob", blob);
  let reader = new FileReader();
  let res = {};
  reader.readAsBinaryString(blob);
  reader.onload = function () {
    res = JSON.parse(this.result);
    callBack(res);
  };
}
</script>

<style scoped></style>
