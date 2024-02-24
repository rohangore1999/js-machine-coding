function select(path, nodes) {
  const pathArray = path.split("/");
  const result = [];

  const nodeMap = {};

  nodes.forEach((node) => {
    const [id, name, dataFoo, parentId] = node.split(" ");
    const parentNode = parentId === "NONE" ? null : nodeMap[parentId];

    const newNode = {
      id,
      name,
      dataFoo,
      parent: parentNode,
    };

    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(newNode);
    }

    nodeMap[id] = newNode;
  });

  console.log({ nodeMap });

  const findNodes = (currentNode, currentPathIndex) => {
    // base case
    if (!currentNode || currentPathIndex >= pathArray.length) {
      return;
    }

    const currentName = pathArray[currentPathIndex];
    // if currentName = a and pathIndex from pathArray if its matches [a, b, c]
    if (currentNode.name === currentName) {
      // checking if it is the last idx
      if (currentPathIndex === pathArray.length - 1) {
        result.push(currentNode.dataFoo);
      }

      if (currentNode.children) {
        currentNode.children.forEach((childNode) => {
          findNodes(childNode, currentPathIndex + 1);
        });
      }
    }
  };

  // Taking parent Node
  const rootNodes = nodes.filter((node) => node.split(" ")[3] === "NONE");

  rootNodes.forEach((rootNode) => {
    const root = nodeMap[rootNode.split(" ")[0]];
    findNodes(root, 0);
  });

  return result;
}

// Example usage
const path = "a/b/c";
const nodes = [
  "A0 a 0 NONE",
  "B1 b 1 A0",
  "C2 c 2 B1",
  "C3 c 3 B1",
  "D4 d 4 B1",
  "E5 e 5 A0",
  "C6 c 6 E5",
];

const result = select(path, nodes);
console.log(result); // Output: ['2', '3']

/**
 The way we stored nodeMap =>

 node /tmp/neOHGQawDh.js
Node A0: <ref *1> {
  id: 'A0',
  name: 'a',
  dataFoo: '0',
  parent: null,
  children: [
    {
      id: 'B1',
      name: 'b',
      dataFoo: '1',
      parent: [Circular *1],
      children: [Array]
    },
    {
      id: 'E5',
      name: 'e',
      dataFoo: '5',
      parent: [Circular *1],
      children: [Array]
    }
  ]
}
Children of Node A0: <ref *1> [
  {
    id: 'B1',
    name: 'b',
    dataFoo: '1',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Circular *1]
    },
    children: [ [Object], [Object], [Object] ]
  },
  {
    id: 'E5',
    name: 'e',
    dataFoo: '5',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Circular *1]
    },
    children: [ [Object] ]
  }
]
Node B1: <ref *1> {
  id: 'B1',
  name: 'b',
  dataFoo: '1',
  parent: {
    id: 'A0',
    name: 'a',
    dataFoo: '0',
    parent: null,
    children: [ [Circular *1], [Object] ]
  },
  children: [
    { id: 'C2', name: 'c', dataFoo: '2', parent: [Circular *1] },
    { id: 'C3', name: 'c', dataFoo: '3', parent: [Circular *1] },
    { id: 'D4', name: 'd', dataFoo: '4', parent: [Circular *1] }
  ]
}
Children of Node B1: <ref *1> [
  {
    id: 'C2',
    name: 'c',
    dataFoo: '2',
    parent: {
      id: 'B1',
      name: 'b',
      dataFoo: '1',
      parent: [Object],
      children: [Circular *1]
    }
  },
  {
    id: 'C3',
    name: 'c',
    dataFoo: '3',
    parent: {
      id: 'B1',
      name: 'b',
      dataFoo: '1',
      parent: [Object],
      children: [Circular *1]
    }
  },
  {
    id: 'D4',
    name: 'd',
    dataFoo: '4',
    parent: {
      id: 'B1',
      name: 'b',
      dataFoo: '1',
      parent: [Object],
      children: [Circular *1]
    }
  }
]
Node C2: <ref *1> {
  id: 'C2',
  name: 'c',
  dataFoo: '2',
  parent: {
    id: 'B1',
    name: 'b',
    dataFoo: '1',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Array]
    },
    children: [ [Circular *1], [Object], [Object] ]
  }
}
Node C3: <ref *1> {
  id: 'C3',
  name: 'c',
  dataFoo: '3',
  parent: {
    id: 'B1',
    name: 'b',
    dataFoo: '1',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Array]
    },
    children: [ [Object], [Circular *1], [Object] ]
  }
}
Node D4: <ref *1> {
  id: 'D4',
  name: 'd',
  dataFoo: '4',
  parent: {
    id: 'B1',
    name: 'b',
    dataFoo: '1',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Array]
    },
    children: [ [Object], [Object], [Circular *1] ]
  }
}
Node E5: <ref *1> {
  id: 'E5',
  name: 'e',
  dataFoo: '5',
  parent: {
    id: 'A0',
    name: 'a',
    dataFoo: '0',
    parent: null,
    children: [ [Object], [Circular *1] ]
  },
  children: [ { id: 'C6', name: 'c', dataFoo: '6', parent: [Circular *1] } ]
}
Children of Node E5: <ref *1> [
  {
    id: 'C6',
    name: 'c',
    dataFoo: '6',
    parent: {
      id: 'E5',
      name: 'e',
      dataFoo: '5',
      parent: [Object],
      children: [Circular *1]
    }
  }
]
Node C6: <ref *1> {
  id: 'C6',
  name: 'c',
  dataFoo: '6',
  parent: {
    id: 'E5',
    name: 'e',
    dataFoo: '5',
    parent: {
      id: 'A0',
      name: 'a',
      dataFoo: '0',
      parent: null,
      children: [Array]
    },
    children: [ [Circular *1] ]
  }
}

 */
