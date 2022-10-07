
const Button = ({dishNames, onClick}) =>{

   
    const handleClick = () => {
        const name = dishNames
        onClick(name)
    }

    return(
        <>
        <li>
            {dishNames}
            <button onClick={handleClick}>Mexico</button>
            <button onClick={handleClick}>Italy</button> 
            <button onClick={handleClick}>India</button>
        </li>
        
    
        </>

    )
}


export default Button;