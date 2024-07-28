/** @type {import('next').NextConfig} */
module.exports = {
    serverRuntimeConfig: {
      api: {
        // 设置服务器超时时间（以毫秒为单位）
        timeout: 30000,
      },
    },
    publicRuntimeConfig: {
      api: {
        // 设置客户端超时时间（以毫秒为单位）
        timeout: 30000,
      },
    },
  };