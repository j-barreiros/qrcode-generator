import styled from "styled-components";

export const QRFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 0px 10px 10px 0px;

    .generate-qr-title {
        text-align: center;
    }

    .text-input {
        margin-bottom: 15px;
        background: none;
        border: 3px solid #202124;
        border-radius: 10px;
        padding: 5px;
        color: #F8F8F8;
        font-size: 15px;
        background-color: #181818;
        transition: border-color 0.5s;
        &:focus {
            outline: none;
            border-color: #1ED760;
        }
    }

    .qr-textarea {
        resize: none;
    }

    .button {
        margin-bottom: 15px;
    }
`