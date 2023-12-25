let people = [5,1,4,2],
  limit = 6;

const numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a);

  temp_limit = limit;
  let cnt = 0;

  for (let i = 0; i < people.length; i++) {
    if (people[i] <= temp_limit) {
      temp_limit -= people[i];
      cnt = 1;
    } else {
      temp_limit = limit;

      if (people[i] <= temp_limit) {
        temp_limit -= people[i];
        cnt += 1;
      }
    }
  }

  return cnt;
};

console.log(numRescueBoats(people, limit));
