import profilePicture from "../../../images/profile-picture.jpg";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  width: 5em;
  border-radius: 5em;
`;

export const ProfilePicture = () => {
  return <StyledImg src={profilePicture} className="profile" alt="profile" />;
};
