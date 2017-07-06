import AsyncService from './async-examples';

describe('The async service', () => {

  const service = new AsyncService();

  it('can be created', () => {
    expect(service).toBeDefined();
  });

  it('sayHello should resolve with hello', (done) => {
    service.sayHello().then((actual) => {
      expect(actual).toBe('hello');
      done();
    });
  });

  it('sayHello with secondary call to sayWorld should resolve correctly', (done) => {
    service.sayHello()
      .then(
        (prefix) => {
          expect(prefix).toBe('hello');
          return service.sayWorld(prefix);
        })
      .then(
        (result) => {
          expect(result).toBe('hello world');
          done();
        })
      .catch((err) => {
        console.log('caught an exception');
      })
  });

  it('sayHello to resolve to hello: async', async () => {
    try {
      const prefix = await service.sayHello();
      expect(prefix).toBe('hello');
      const sayWorldResult = await service.sayWorld(prefix);
      expect(sayWorldResult).toBe('hello world');
    } catch (err) {
      console.log('caught an exception');
    }
  });

  it('ohNo should reject', (done) => {
    service.ohNo()
      .then((result) => {
        console.log('results', result);
      })
      .catch((err) => {
        expect(err).toBe('oopss!!');
        console.log('handling rejetc');
        done();
      });
  });

  it('ohNo should reject: async', async () => {
    try {
      const actual = await service.ohNo();
      fail();
    } catch (err) {
      expect(err).toBe('oopss!!');
    }
  });


  it('concurrent promises', (done) => {
    Promise.all([service.sayHello(), service.sayWorld('my wonderful')]).then((result) => {
      console.log(result[0]);
      console.log(result[1]);
      expect(true).toBe(true);
      done()
    })
  });

  it('concurrent promises: async', async () => {
    const result = await Promise.all([service.sayHello(), service.sayWorld('my wonderful')]);
    console.log(result[0]);
    console.log(result[1]);
    expect(true).toBe(true);
  });

  it('race promises', (done) => {
    Promise.race([service.sayHello(), service.sayWorld('my wonderful')]).then((result) => {
      console.log(result);
      expect(true).toBe(true);
      done()
    })
  });

  it('race promises: async', async () => {
    const result = await Promise.race([service.sayHello(), service.sayWorld('my wonderful')]);
    console.log(result[0]);
    expect(true).toBe(true);
  });

});