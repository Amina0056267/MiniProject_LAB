

const Dish = ({dishNames,location, onClick}) => {

    return(
        <>
        <div className="dish"> 
        <header>Dish : {dishNames}</header>
        <main>
            <ul>
                {
                    dishNames.map((dishNames,index) => {
                        return (
                        <Dish key = {dishNames + index} dishNames={dishNames} location={location} onClick={onClick} />
                    )
                })
                }
                <button onClick={onClick}> Load New Dish </button>
            </ul>
        </main>
        </div>
        </>
        

    )
}

export default Dish;