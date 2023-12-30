import { useEffect, useRef, useState } from "react";

// Components
import Action from "./Action";

const Comment = ({
  comment,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const ref = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addComment = () => {
    if (editMode) {
      handleEditNode(comment.id, ref?.current?.innerText);

      setEditMode(false);
    } else {
      handleInsertNode(comment.id, input);

      setInput("");
      setShowInput(false);
    }
  };

  useEffect(() => {
    ref?.current?.focus();
  }, [editMode]);

  return (
    <div>
      <div>
        {comment?.id === 1 ? (
          <div style={{ display: "flex", gap: "5px" }}>
            <input value={input} onChange={handleChange} />

            <Action
              style={{ marginLeft: "5px" }}
              type={"Comment"}
              handleClick={addComment}
            />
          </div>
        ) : (
          <>
            <span contentEditable={editMode} ref={ref}>
              {comment?.comment}
            </span>

            {editMode ? (
              <div style={{ display: "flex" }}>
                <Action
                  style={{ marginLeft: "5px" }}
                  type={"Save"}
                  handleClick={addComment}
                />

                <Action
                  style={{ marginLeft: "5px" }}
                  type={"Cancel"}
                  handleClick={() => {
                    if (ref.current) {
                      ref.current.innerText = comment.comment;
                    }

                    setEditMode(false);
                  }}
                />
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <Action
                  style={{ marginLeft: "5px" }}
                  type={"Reply"}
                  handleClick={() => setShowInput(true)}
                />
                <Action
                  style={{ marginLeft: "5px" }}
                  type={"Edit"}
                  handleClick={() => {
                    setEditMode(true);
                  }}
                />
                <Action
                  style={{ marginLeft: "5px" }}
                  type={"Delete"}
                  handleClick={() => handleDeleteNode(comment.id)}
                />
              </div>
            )}

            {showInput && (
              <div style={{ display: "flex" }}>
                <input value={input} onChange={handleChange} />
                <Action type="Reply" handleClick={addComment} />
                <Action type="Cancel" handleClick={() => setShowInput(false)} />
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ padding: "15px" }}>
        {comment?.items?.map((commentItem) => (
          <Comment
            key={commentItem?.id}
            comment={commentItem}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleEditNode={handleEditNode}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
