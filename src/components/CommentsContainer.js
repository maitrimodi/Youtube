import React from 'react';
import Comment from './Comment';
import CommentsList from './CommentsList';

const commentsData = [
  {
    id: 1,
    name: 'Maitri Modi',
    text: 'This explanation was super clear 🔥',
    replies: [
      {
        id: 2,
        name: 'Rahul Shah',
        text: 'Yeah, especially the last part',
        replies: [
          {
            id: 3,
            name: 'Ananya Patel',
            text: 'Agreed! That example helped a lot',
            replies: [
              {
                id: 4,
                name: 'Kunal Mehta',
                text: 'Same here, finally understood it 😅',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Sneha Mehta',
        text: 'Can you share the repo link?',
        replies: [
          {
            id: 6,
            name: 'Maitri Modi',
            text: 'Sure! I’ll add it in the description 👍',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Amit Verma',
    text: 'One of the best videos on this topic 👏',
    replies: [
      {
        id: 8,
        name: 'Neha Joshi',
        text: 'Totally! I was struggling before this',
        replies: [
          {
            id: 9,
            name: 'Rohit Patel',
            text: 'Same 😭 this saved me',
            replies: [],
          },
          {
            id: 10,
            name: 'Priya Desai',
            text: 'Bookmarking this for later',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Kavya Nair',
    text: 'Would love a part 2 covering edge cases',
    replies: [
      {
        id: 12,
        name: 'Arjun Malhotra',
        text: 'Yes please! Especially performance tips',
        replies: [
          {
            id: 13,
            name: 'Maitri Modi',
            text: 'Noted 👀 coming soon!',
            replies: [
              {
                id: 14,
                name: 'Dev Singh',
                text: 'Subscribed already 🔔',
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'Sahil Khanna',
    text: 'Anyone tried this in production?',
    replies: [
      {
        id: 16,
        name: 'Riya Kapoor',
        text: 'Yep, works well with some tweaks',
        replies: [
          {
            id: 17,
            name: 'Sahil Khanna',
            text: 'Nice! What tweaks did you make?',
            replies: [
              {
                id: 18,
                name: 'Riya Kapoor',
                text: 'Memoization + debouncing',
                replies: [
                  {
                    id: 19,
                    name: 'Aditya Rao',
                    text: 'Great tip, thanks!',
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
];

const CommentsContainer = ({ commentCount }) => {
  return (
    <div className="m-2">
      <h1 className="font-bold text-xl">{commentCount} Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
