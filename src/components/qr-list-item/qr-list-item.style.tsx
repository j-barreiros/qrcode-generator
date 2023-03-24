import styled from "styled-components";

export const QrListItemContainer = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 10px 5px 10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #121212;
    color: #fff;
    cursor: pointer;
    overflow: hidden;

    .qr-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .qr-miniature {
            display: flex;
            margin-right: 20px;
        }
    }

    .delete-btn {
        background: none;
        border: none;
        cursor: pointer;

        .icon {
            fill: #aaa;
            transition: fill 0.2s;
        }

        &:hover {
            .icon {
                fill: #fff;
            }
        }
    }
`