const Input = (props) => {
    const {context, children, name} = props

    return(
        <input 
        className="text-sm border rounded w-full text-slate-700 px-3 py-2 placeholder: opacity-50" 
        type={children}
        placeholder={context}
        name={name}
        id={name}
        />

    )
}

export default Input