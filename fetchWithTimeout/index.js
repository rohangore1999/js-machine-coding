const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    // initialize the Abort Controller so that we can abort the request
    const controller = new AbortController();
    const abortSignal = controller.signal;
    let timerId;

    fetch(url, { abortSignal })
      .then((res) =>
        res
          .json()
          .then((e) => {
            clearTimeout(timerId);
            resolve(e);
          })
          .catch((err) => reject(err))
      )
      .catch((err) => reject(err));

    timerId = setTimeout(() => {
      controller.abort();
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 5000)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
