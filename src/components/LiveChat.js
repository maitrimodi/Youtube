import { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessages, generateRandomNames } from '../utils/helper';

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const int = setInterval(() => {
      console.log('API polling');

      dispatch(
        addMessage({
          id: 1,
          name: generateRandomNames(),
          message: generateRandomMessages(),
        }),
      );
    }, 1500);
    // API polling

    return () => clearInterval(int);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <form
        className="border border-black w-full p-2 ml-2 flex rounded-lg bg-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('ON FORM SUBMIT', liveMsg);
          dispatch(
            addMessage({
              name: 'Maitri Modi',
              message: liveMsg,
            }),
          );
          setLiveMsg('');
        }}
      >
        <input
          type="text"
          className="border border-slate-500 w-64 mr-2 rounded-lg px-2 text-sm"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-slate-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
