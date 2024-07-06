import React, { useState } from "react";
import { explorer } from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

const App = () => {
  const [data, setData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(data, folderId, item, isFolder);

    setData(finalTree);
  };

  return (
    <main>
      <Folder data={data} handleInsertNode={handleInsertNode} />
    </main>
  );
};

export default App;
