export const useNode = () => {
  const insertNode = (comments, commentId, item) => {
    // Given commentId already present at ROOT LEVEL [ First Comment ] - clicked on Reply button
    // add in the new item
    if (commentId === comments.id) {
      comments.items.push({
        id: new Date().getTime(),
        comment: item,
        items: [],
      });

      return comments;
    }

    // If commentId is present in nested object inside items
    // it will return original obj with changes nested object inside
    comments.items.map((itemObj) => insertNode(itemObj, commentId, item));

    return comments;
  };

  const editNode = (comments, commentId, value) => {
    if (comments.id === commentId) {
      comments.comment = value;

      return comments;
    }

    comments.items.map((itemObj) => editNode(itemObj, commentId, value));

    return comments;
  };

  const deleteNode = (comments, commentId) => {
    // if ParentNode deleted then we have to remove its children too.
    for (let i = 0; i < comments.items.length; i++) {
      const currentItem = comments.items[i];

      if (currentItem.id === commentId) {
        comments.items.splice(i, 1);
      } else {
        deleteNode(currentItem, commentId);
      }
    }

    // returing the copy of the object as in splice we are mutating the object directly
    return { ...comments };
  };

  return { insertNode, editNode, deleteNode };
};
