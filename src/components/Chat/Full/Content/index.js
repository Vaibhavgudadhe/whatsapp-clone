import mockMessages from "./mock.json";

import * as S from "./styles";

const ChatFullContent = () => {
  return (
    <S.Wrapper>
      <S.Warn>🔐 Messages and calls are end to end encrypted. no one outside of this chat ,not even whatsapp can real or listen to them . tap to learn more</S.Warn>
      <S.ChatDate>Home</S.ChatDate>
      {mockMessages.map(({ id, message, time }) => (
        <S.Message key={id}>
          <p>{message}</p>
          <span>{time}</span>
        </S.Message>
      ))}
    </S.Wrapper>
  );
};

export default ChatFullContent;
