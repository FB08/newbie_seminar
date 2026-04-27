type ButtonProps = {
    label: string;
    color: string;
    onClick: () => void;
}

function Button({ label, color, onClick} : ButtonProps ){
    return (
        <button style={{color, backgroundColor: 'rgb(204, 121, 149)'}} onClick={onClick}>{label}</button>
    )
}

export default Button