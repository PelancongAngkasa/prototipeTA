const Text_link = () => {
    const {link, children} = props
    return (
        <a className="Text-White" href={link}>{children}</a>
    )
}

export default Text_link