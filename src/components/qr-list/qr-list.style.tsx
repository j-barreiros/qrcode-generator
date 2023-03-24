import styled from "styled-components";

export const QRListContainer = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0px 20px 20px;
    border-radius: 10px;
    background-color: #121212;
    border-radius: 10px 0px 0px 10px;

    .button {
        margin-bottom: 15px;
    }

    .list {
        height: 100%;
        width: 300px;
        background-color: #181818;
        overflow-y: auto;
        overflow-x: hidden;
    }

`