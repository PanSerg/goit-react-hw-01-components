import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
  }
`;

export const ProfileStyle = styled.div`
   color: wight;
   display: flex;
   justify-content: centre;
   text-align: center;
`;

export const ImgStyle = styled.div`
   border-radius: 100%;
`;

export const NameStyle = styled.p`
  color: black;
  front-weight: 800px;
`;

export const ListStat = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
  list-style: none;
  background-color: #3f61bf;
  border: 1px solid black;
  li {
    display: flex;
    align-items: center;
    flax-direction: column;
  }
`;

export const Stats = styled.ul`
  color: black;
  padding-top: 10px;
  font-weight: 600;
`;