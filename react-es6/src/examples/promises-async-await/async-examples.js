

class AsyncService {

  sayHello() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello');
      }, 200);
    });
  }

  sayWorld(prefix) {
    return new Promise((resolve, reject) => {
        resolve(`${prefix} world`);
    });
  }

  ohNo() {
    return new Promise((resolve, reject) => {
      reject('oopss!!');
    });
  }

}

export default AsyncService;