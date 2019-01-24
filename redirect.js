
/**
 * getRedirectionURI
 * 링크에 들어있는 queryString을 파싱합니다.
 * 파라미터에 해당하는 밸류값을 주소로 받아옵니다.
 */
function getRedirectionURI(key) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);


    let defaultURI = 'https://hebal400.github.io';
    let redirectionURI = urlParams.has(key) ? decodeURIComponent(urlParams.get(key)) : defaultURI;

    alert(`주소는 ${redirectionURI}`)
    return redirectionURI;
}

/**
 * checkValidURI
 * @uri: string
 * return boolean
 * 파라미터로 들어온 uri의 값의 valid를 체크합니다.
 *
 * 현재 미구현 상태
 */
function checkValidURI(uri) {
    return false;
}

/**
 * redirect
 */
function redirect() {
    let redirect_uri = getRedirectionURI('redirect_uri');

    if(checkValidURI(redirect_uri)) {
        window.location.href = redirect_uri;
    }
}

var waitSecond = 3;
for (var i = 0; i < 3; i++) {
  var second = document.querySelector('.second');

  second.innerHTML = waitSecond;
  waitSecond--;
}
function secondCount() {
  // var second = document.querySelector('.second');
  //
  // second.innerHTML = waitSecond;
  // waitSecond--;
}

redirect();
setTimeout(redirect, 3000);
// setTimeout(secondCount, 1000);
