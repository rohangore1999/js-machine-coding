class EventEmitter {
  constructor() {
    this.eventObj = {};
  }

  // or just
  // eventObj = {};

  subscribe(eventName, callback) {
    if (this.eventObj[eventName]) {
      this.eventObj[eventName].push(callback);
    } else {
      this.eventObj[eventName] = [callback];
    }

    return {
      unsubscribe: () => {
        // filtering the cb which was passed, as we want to remove the cb for that particular instance
        // replacing as filter returns new copy
        this.eventObj[eventName] = this.eventObj[eventName].filter(
          (cb) => cb !== callback
        );
      },
    };
  }

  emit(eventName, args = []) {
    let res = [];

    if (this.eventObj[eventName]) {
      for (let event of this.eventObj[eventName]) {
        res.push(event.apply(this, args));
      }
    }
    console.log({ res });
    return res;
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 1;
}

function onClickCallback1() {
  return 2;
}

function onClickCallback2() {
  return 3;
}
const sub = emitter.subscribe("onClick", onClickCallback);
const sub1 = emitter.subscribe("onClick", onClickCallback1);
const sub2 = emitter.subscribe("onClick", onClickCallback2);

emitter.emit("onClick"); // [1,2,3]
sub.unsubscribe(); // [2,3] as we use sub's context and unsubscribing to that so 1 will get removed
emitter.emit("onClick"); // []
