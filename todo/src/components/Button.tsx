type ButtonProps = {
    label: string;
    color: string;
    onClick: () => void;
}

function Button({ label, color, onClick} : ButtonProps ){
    return (
        <button style={{color}} onClick={onClick}>{label}</button>
    )
}

export default Button