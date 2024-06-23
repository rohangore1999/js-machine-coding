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
    if (visited.has(node)) {
      return 0;
    }

    let size = 1;
    visited.add(node);

    // check for neighbours
    for (let neighbour of graph[node]) {
      console.log({ node, neighbour, size });
      size = size + dfs(neighbour);
    }

    console.log({ node, size });
    return size;
  };

  const dfsIterative = (node) => {
    const stack = [node];
    let count = 0;

    if (!visited.has(node)) {
      visited.add(node);
      count += 1;
    }

    while (stack.length) {
      let n = stack.pop();

      for (let neighbour of graph[n]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          stack.push(neighbour);
          count += 1;
        }
      }
    }

    return count;
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      const size = dfsIterative(node);
      maxCount = Math.max(maxCount, size);
    }
  }

  return maxCount;
};

console.log(maxIsland(graph));
