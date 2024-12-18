const Button = (props) => {
    const {context} = props
    return (
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {context}
        </button>
    )
}

export default Button