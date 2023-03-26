import styled from "styled-components"

type StyledButtonProps = {
    size: 'small' | 'big',
}

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => props.size == 'small' ? "50%" : "100%"};
    padding: 5px;
    //margin: 0px 10px 15px 10px;
    background-color: #1ED760;
    border-radius: 15px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover {
        background-color: #20e868;
    }    
`

export default StyledButton;