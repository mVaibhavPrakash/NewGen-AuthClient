const Input = ({typ,nam,max,onChangeFun}) => {
    return (
        <input type={typ} name={nam} id={nam} maxLength={max} onChange={onChangeFun}/>
    )
}

export default Input
