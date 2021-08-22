console.log('Hello Parcel');

const test = async () => {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()

// Uncaught ReferenceError: regeneratorRuntime is not defined
// babel 에서는 기본 옵션 만으로 async await 문법을 지원 하지 않는다.