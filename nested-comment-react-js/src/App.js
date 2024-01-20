import React, { useState } from "react";

// Components
import Comment from "./components/Comment";
import NestedComponent from "./components/NestedComponent";

// Hooks
import { useNode } from "./hooks/useNode";

// mock comments
const comments = {
  id: 1,
  items: [],
};

const App = () => {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (commentId, item) => {
    const finalStructure = insertNode(comments, commentId, item);

    setCommentsData(finalStructure);
  };

  const handleEditNode = (commentId, value) => {
    const finalStructure = editNode(comments, commentId, value);

    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (commentId) => {
    const finalStructure = deleteNode(comments, commentId);

    setCommentsData(finalStructure);
  };

  return (
    <div>
      <Comment
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        comment={commentsData}
      />

      <h1>Listing Nested Comments</h1>

      <NestedComponent />
    </div>
  );
};

export default App;
