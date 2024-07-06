const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    // tree -> whole data
    // folderId -> The folder which you clicked
    // item -> name of the folder/file
    if (tree.id === folderId && tree.isFolder) {
      // is first node itself is where we have to add item
      tree.items.unshift({
        id: new Date(),
        name: item,
        isFolder,
        items: [],
      }); // adds it at first position

      return tree;
    }

    // loop over remaining tree - DFS
    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseTree;
