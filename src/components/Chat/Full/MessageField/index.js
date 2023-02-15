import { useState } from "react";

import Input from "../../../Input/index";

import * as S from "./styles";

const ChatFullMessageField = () => {
  const [message, setMessage] = useState("");

  const handleSubmitMessage = event => {
    event.preventDefault();
    alert(`you typed: ${message}`);
    setMessage("");
  };

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmitMessage}>
        <Input
          type="text"
          placeholder="Type a message"
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        />
      </form>
    </S.Wrapper>
  );
};

export default ChatFullMessageField;
