// 파일명 뒤에 rc(runtime Configuration)가 붙은 파일은 구성 파일을 의미 한다.
// 그리고 파일명 앞에 . 이 붙는것은 숨김 파일을 의미 한다.

// Nodejs 환경 에서는 자바스크립트의 import 방식을 지원 하지 않고 
// const autoprefixer = require('autoprefixer') // 함수를 통해서 자바스크립트 파일을 가져온다. CommonJS
// import autoprefixer from 'autoprefixer'

// 웹 브라우져에서 동작하는 자바스크립트 파일은 ESM의 import 키워드 지원

// export
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}

// export {
//  plugins: [
//    autoprefixer
//  ]
// }