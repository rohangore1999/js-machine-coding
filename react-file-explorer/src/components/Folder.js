import React, { useState } from "react";
import "./style.css";

const Folder = ({ data, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleFolderClick = (e, isFolder) => {
    e.stopPropagation();

    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    // keyCode = 13 is for Enter
    if (e.keyCode === 13 && e.target.value) {
      // add logic
      handleInsertNode(data.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (data.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        {/* Name */}
        <div className="folder">
          <span onClick={() => setExpand(!expand)}>📁 {data.name}</span>

          <div>
            <button onClick={(e) => handleFolderClick(e, true)}>
              + Add Folder
            </button>

            <button onClick={(e) => handleFolderClick(e, false)}>
              + Add File
            </button>
          </div>
        </div>

        {/* Items */}
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗄️"}</span>

              <input
                className="inputContainer__input"
                autoFocus
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {data.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              key={data.id}
              data={item}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗄️ {data.name}</span>;
  }
};

export default Folder;
