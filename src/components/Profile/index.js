import { useContext } from "react";
import { MenuProfileContext } from "../../contexts/MenuProfileContext";

import { ReactComponent as BackIcon } from "../../assets/svg/arrow-back-icon.svg";
import userIcon from "../../assets/img/user-icon.png";

import * as S from "./styles";

const Profile = () => {
  const { isOpen, closeMenu } = useContext(MenuProfileContext);

  return (
    <>
      {isOpen && (
        <S.Wrapper>
          <S.Header>
            <S.Back>
              <BackIcon onClick={closeMenu} />
              <h3>Profile</h3>
            </S.Back>
          </S.Header>

          <S.UserImage>
            <img src={userIcon} width="200" alt="photo invalid" />
          </S.UserImage>

          <S.UserData>
            <span>Name</span>
            <p>vaibhav</p>
          </S.UserData>

          <S.UserData>
            <span>about</span>
            <p>Hey there ! i am using Whatsapp</p>
          </S.UserData>
        </S.Wrapper>
      )}
    </>
  );
};

export default Profile;
