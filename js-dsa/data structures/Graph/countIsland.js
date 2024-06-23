let graph = {
  1: [2],
  2: [3, 4],
  3: [],
  4: [],
  5: [6, 7],
  6: [],
  7: [],
};

const maxIsland = (graph) => {
  let visited = new Set(),
    maxCount = 0;

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
    }

    // check for neighbours
    for (let neighbour of graph[node]) {
      dfs(neighbour);
    }
  };

  const dfsIterative = (node) => {
    const stack = [node];

    if (!visited.has(node)) {
      visited.add(node);
    }

    while (stack.length) {
      let n = stack.pop();

      for (let neighbour of graph[n]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          stack.push(neighbour);
        }
      }
    }
  };

  for (let node in graph) {
    // while iterating js will convert node into string
    if (!visited.has(parseInt(node))) {
      // parsing into number and checking
      dfsIterative(parseInt(node)); // parsing into number and sending to func
      maxCount++;
    }
  }

  return maxCount;
};

console.log(maxIsland(graph));
