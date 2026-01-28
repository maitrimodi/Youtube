import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNUOgjEhHpfUqnVk-Tp2uN1AhrrzXhwdX9A&s"
        alt="user-icon"
        className="h-7 rounded-full mr-2"
      />
      <span className="font-bold mx-2 text-xs text-slate-600">@{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
