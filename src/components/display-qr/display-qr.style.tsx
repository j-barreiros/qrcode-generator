import styled from "styled-components";

export const DisplayQRContainer = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 0px 10px 10px 0px;
    background-color: #121212;

    .section-title {
        color: #F8F8F8;
        text-align: center;
        font-size: 25px;
        margin-bottom: 17px;
    }

    .qr-values {
        color: #fff;
        font-weight: 300;
        font-size: 20px;
        width: 200px;
        white-space: nowrap;
        overflow-x: scroll;
    }

    .button {
        margin-bottom: 15px;
    }
`