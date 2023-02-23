import styled from "@emotion/styled";

export const Active = styled.p`
    color: red;
    text-align: center;
    margin-left: 15px;
    width: 10px;
    height: 0;

    background-color: ${({ status }) => {
        return status ? "green" : "red" }};
`;