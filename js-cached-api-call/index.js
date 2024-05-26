const cachedApiCall = function (maxTime) {
  const cache = {};

  return async function (fetchUrl) {
    try {
      if (!cache[fetchUrl] || Date.now() > cache[fetchUrl].expiryTime) {
        let result = await fetch(fetchUrl);
        result = await result.json();

        cache[fetchUrl] = { result, expiryTime: Date.now() + maxTime };

        console.log("1st time api call");

        return result;
      }

      console.log("returing from Cache");

      return cache[fetchUrl];
    } catch (e) {
      console.log(e);
    }
  };
};

const call = cachedApiCall(1500);

// 1:
// as call is an async function, it will always return a promise.
call("https://jsonplaceholder.typicode.com/todos/1").then((a) =>
  console.log(a)
);

// 2:
// cached response will be returned, it will be quick
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1").then((a) =>
    console.log(a)
  );
}, 700);

// 3: As time exceeded, it will make api call again
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1").then((a) =>
    console.log(a)
  );
}, 5000);
