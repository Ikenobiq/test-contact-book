function Checkbox({onChange, checked}) {
    return (<input onChange={onChange} type="checkbox" checked={checked}/>)
}

export default Checkbox;