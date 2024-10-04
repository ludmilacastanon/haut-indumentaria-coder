function Button (props) {
    return(
        <button 
            style={{ backgroundColor: props.color}}
            onClick={props.callback}
        >
            {props.label}
        </button>
    )
}

export default Button 