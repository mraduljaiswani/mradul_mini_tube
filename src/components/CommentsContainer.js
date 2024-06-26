import React from "react";

const commentsData = [
  {
    name: "Mradul Jaiswani",
    text: "Loren ipsum dolor",
    replies: [
      {
        name: "Mradul Jaiswani",
        text: "Loren ipsum dolor",
        replies: [
          {
            name: "Mradul Jaiswani",
            text: "Loren ipsum dolor",
            replies: [
              {
                name: "Mradul Jaiswani",
                text: "Loren ipsum dolor",
                replies: [
                  {
                    name: "Mradul Jaiswani",
                    text: "Loren ipsum dolor",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "Mradul Jaiswani", text: "Loren ipsum dolor", replies: [] },
  { name: "Mradul Jaiswani", text: "Loren ipsum dolor", replies: [] },
  {
    name: "Mradul Jaiswani",
    text: "Loren ipsum dolor",
    replies: [
      {
        name: "Mradul Jaiswani",
        text: "Loren ipsum dolor",
        replies: [
          { name: "Mradul Jaiswani", text: "Loren ipsum dolor", replies: [] },
        ],
      },
    ],
  },
  { name: "Mradul Jaiswani", text: "Loren ipsum dolor", replies: [] },
  { name: "Mradul Jaiswani", text: "Loren ipsum dolor", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex rounded-lg shadow-md bg-gray-200 p-2 my-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div>
        <p className="font-bold px-3 ">{name}</p>
        <p className=" px-3 ">{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border border-l-black pl-3 ">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="m-5 p-2 font-bold text-2xl">Comments</h1>
      {/* <Comment data={commentsData[1]} />{" "} */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
