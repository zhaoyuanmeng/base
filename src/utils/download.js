import { pureAxios, axios } from '@/utils/request'

const downloadUrl = '/system/common/download'

const mimeMap = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
  xml: 'application/xml'
}

// 通过文件流的方式
export function exportExcelByFile(url, params) {
  axios({
    url: url,
    method: 'post',
    params: params,
    responseType: 'blob',
    headers: {
      type: 'multipart/form-data'
    }
  }).then(res => {
    let content = res // 文件流
    myResolveBlob(content, '设备编码规则')
  })
}

export const exportExcel = (url, params = {}) => {
  return axios({
    url: getaway + url,
    method: 'post',
    params: params
  }).then(res => {
    console.log('msg-------', res)
    if (res.code === 0) {
      downloadXlsx(res.msg)
    }
  })
}
/**
 * 下载.xlsx文件
 * @param {String} filename 文件名
 */
export function downloadXlsx(filename) {
  pureAxios({
    url: downloadUrl,
    method: 'get',
    params: { fileName: filename, delete: true },
    responseType: 'blob'
  }).then(res => {
    resolveBlob(res, mimeMap.xlsx)
  })
}

/**
 * 代码生成并下载为zip
 * @param {String} url 链接
 * @param {String} tables 表名
 */
export function genCodeZip(url, tables) {
  pureAxios({
    url: url,
    method: 'get',
    params: { tables: tables },
    responseType: 'blob'
  }).then(res => {
    resolveBlob(res, mimeMap.zip)
  })
}

/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob(res, mimeType) {
  console.log('作者下载模板', res)
  const aLink = document.createElement('a')
  var blob = new Blob([res.data], { type: mimeType })
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
  var contentDisposition = decodeURI(res.headers['content-disposition'])
  var result = patt.exec(contentDisposition)
  var fileName = result[1]

  aLink.href = URL.createObjectURL(blob)
  aLink.setAttribute('download', fileName) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
  window.URL.revokeObjectURL(aLink.href)
}

/**
 * 自己的通用下载方法
 * @param {Object} res 数据流
 * @param {String} fileName 文件名字
 */
export function myResolveBlob(res, fileName) {
  const aElement = document.createElement('a')
  const blob = new Blob([res], { type: 'application/vnd.ms-excel,charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  aElement.setAttribute('href', url)
  aElement.setAttribute('download', fileName)
  document.body.appendChild(aElement)
  aElement.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(aElement)
}

export function myResolveBlobZip(res, fileName) {
  const aElement = document.createElement('a')
  const blob = new Blob([res], { type: 'application/zip,charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  aElement.setAttribute('href', url)
  aElement.setAttribute('download', fileName)
  document.body.appendChild(aElement)
  aElement.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(aElement)
}

/**
 * 自己的通用下载方法
 * @param {Object} url 文件下载地址
 * @param {String} fileName 文件名字
 */
export function myResolveUrl(url) {
  const aElement = document.createElement('a')
  aElement.setAttribute('href', url)
  aElement.setAttribute('download', '123.xlsx')
  document.body.appendChild(aElement)
  aElement.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(aElement)
}
