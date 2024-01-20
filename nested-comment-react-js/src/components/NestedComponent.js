import React from "react";

const commentsData = [
  {
    name: "Rohan Gore",
    text: "Hello",
    replies: [],
  },
  {
    name: "Rohan Gore",
    text: "Hello",
    replies: [
      {
        name: "Rohan Gore",
        text: "Hello",
        replies: [],
      },
    ],
  },
  {
    name: "Rohan Gore",
    text: "Hello",
    replies: [
      {
        name: "Rohan Gore",
        text: "Hello",
        replies: [
          {
            name: "Rohan Gore",
            text: "Hello",
            replies: [
              {
                name: "Rohan Gore",
                text: "Hello",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return <div>{data.name}</div>;
};

const ListComments = ({ commentsData }) => {
  return commentsData.map((comment) => (
    <div>
      {/* single comments */}
      <Comment data={comment} />

      {/* replies */}
      <div
        style={{
          paddingLeft: "10px",
          borderLeft: "1px solid black",
          marginLeft: "5px",
        }}
      >
        {/* <Comment data={comment} />
        <Comment data={comment} />
        <Comment data={comment} /> */}
        <ListComments commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const NestedComponent = () => {
  return <ListComments commentsData={commentsData} />;
};

export default NestedComponent;
