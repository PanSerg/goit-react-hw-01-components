import styled from "@emotion/styled";

export const Active = styled.p`
    color: red;
    text-align: center;
    margin-left: 15px;
    width: 10px;
    height: 10px;

    background-color: ${({ status }) => {
        switch (status) {
            case "Online":
                return "green";
            case "offline":
                return "red";
            default:
                return "orange";
        }
    }};
`;