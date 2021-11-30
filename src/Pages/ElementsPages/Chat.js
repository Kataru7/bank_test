import React, { useState } from "react";
import "./Chat.css";
import ava from "./avatar.png";

export default function Chat() {
  let [post, setPostM] = useState("");
  let [history, setHistory] = useState([{ message: "Приветствую!" }]);

  let randomPost = [
    "Здравствуйте! Пишите мне, если у вас возникнут вопросыпо работе сайта!",
    "Здравствуйте! Пишите мне, если у вас возникнут вопросыпо работе сайта!",
    "Здравствуйте! Пишите мне, если у вас возникнут вопросыпо работе сайта!",
    "Здравствуйте! Пишите мне, если у вас возникнут вопросыпо работе сайта!",
    "Здравствуйте! Пишите мне, если у вас возникнут вопросыпо работе сайта!",
  ];

  let changepost = (e) => {
    e.preventDefault();
    setHistory((prev) => [...prev, { message: post }]);
    setPostM("");
    setTimeout(() => {
      setHistory((prev) => [
        ...prev,

        { message: randomPost[Math.floor(Math.random() * 5)] },
      ]);
    }, 200);
  };
  console.log(history);
  let chatMessagesHistory = history.map((elem, i) => {
    return i % 2 === 0 ? (
      <div className="bot">
        <div className="bot-avatar">
          <img src={ava} alt={"bot"} width="40px" />
        </div>
        <div className="bot-message">{elem.message}</div>
      </div>
    ) : (
      <div className="user">{elem.message}</div>
    );
  });
  return (
    <div className="chat">
      <div className="chat-header">
        <div>
          <img src={ava} alt={"bot"} width="40px" />
        </div>
        <div>Анна в чате</div>
      </div>
      <div className="chat-main">{chatMessagesHistory.reverse()}</div>
      <div className="chat-input">
        <form onSubmit={changepost}>
          <div>
            <textarea
              className="chat-textarea"
              name="text"
              value={post}
              onChange={(e) => setPostM(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="chat-btn" onClick={changepost}>
              {"->"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
