const Label = (props) => {
    return (
        <>
            <label htmlFor={props.forr}>{props.text}</label>
            <br />
        </>
    )
}

export default Label
