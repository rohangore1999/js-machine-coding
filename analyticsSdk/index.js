const SDK = function () {
  this.logs = [];
  this.count = 1;

  // Storing events
  this.log = (events) => {
    this.logs.push(events);
  };

  // Stub function which will resolve at 1 sec and reject when n % 5
  this.wait = () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          rej();
        } else {
          res();
        }
      }, 1000);
    });

  this.sendAnalytiscEvents = async () => {
    //base condition
    if (this.logs.length === 0) {
      return;
    }

    const current = this.logs.shift(); // give you 1st element

    try {
      await this.wait();

      console.log("Logged : ", current);

      this.count += 1;
    } catch (error) {
      console.log("error...", current);
      console.log("retrying...", current);

      // placing it back to same position
      this.logs.unshift(current);

      // reseting counter
      this.count = 1;
    } finally {
      // recursive calling
      this.sendAnalytiscEvents();
    }
  };
};

const sdk = new SDK();
sdk.log("1");
sdk.log("2");
sdk.log("3");
sdk.log("4");
sdk.log("5");
sdk.log("6");
sdk.log("7");
sdk.log("8");
sdk.log("9");
sdk.log("10");

sdk.sendAnalytiscEvents();
