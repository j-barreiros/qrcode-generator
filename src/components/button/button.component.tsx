import StyledButton from "./button.style";


type ButtonProps = {
    text: string,
    size: 'small' | 'big',
    onClick: Function,
}

const Button = ({text,size,onClick} : ButtonProps) => {
    return (
        <StyledButton
            size={size} 
            onClick={() => onClick()}
            className="button"
        >
            {text}
        </StyledButton>
    )
}

export default Button;