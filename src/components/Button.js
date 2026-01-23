import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-4 m-2 bg-gray-200 rounded-lg hover:bg-gray-400 shrink-0">
        <p className="text-xs font-semibold text-nowrap">{name}</p>
      </button>
    </div>
  );
};

export default Button;
