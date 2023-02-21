import styled from "@emotion/styled";

export const FriendsList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 40px;
  padding: 0;

  li {
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    padding: 15px;

    img {
        margin-top: 10px;
    }
  }
`;