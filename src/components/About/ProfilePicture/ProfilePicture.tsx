import profilePicture from "../../../images/profile-picture.jpg";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  width: 4em;
  border-radius: 5em;
`;

export const ProfilePicture = () => {
  return <StyledImg src={profilePicture} className="profile" alt="profile" />;
};
