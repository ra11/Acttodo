function Header(props){
    return(
        <>
        <h1 className="text-3xl font-medium">Hello {props.username}!</h1>
        <p>I will help to manage your activities :)</p>
        </>
        
    )
}
export default Header