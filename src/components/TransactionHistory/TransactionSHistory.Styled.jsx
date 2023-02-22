import styled from "@emotion/styled";

export const Transactions = styled.table`
    display: flex;
    align-items: centre;
    flax-direction: column;
    margin-top: 50px;
    thead {
        border: 1px solid black;
        background-color: #3FBF5F;
        padding: 10px 20px;
        tr {
            th {
                padding-left: 10px;
            }
        }
    }
`;

export const TableTrans = styled.tbody`
    border: 1px solid black;
    background-color: gainsboro;
    tr {
        td {
            border: 1px solid gray;
            color: #BF3F5F; 
            padding: 5px 15px;
        }
    }
`;