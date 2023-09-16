import profilePicture from "../../../images/profile-pic.jpg";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  width: 8em;
  min-width: 4em;
  border-radius: 50%;
`;

export const ProfilePicture = () => {
  return <StyledImg src={profilePicture} className="profile" alt="profile" />;
};
