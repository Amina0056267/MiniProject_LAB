
import { useState, useEffect } from "react";
import Dish from "../components/Dish";

const DishGuesser = () => {

    // const [dishList, setDishList] = useState([]);
    const [randomImage, setRandomImage] = useState([]);


    // const fetchDishList = async () => {
    //     console.log("Getting dish list data from API");
    //     const response = await fetch("https://foodish-api.herokuapp.com/api/")
    //     const jsonDishList = await response.json();
    //     setDishList(jsonDishList);
    // }

    // promise all (10 fetches)

    const images = Promise.all([
        fetch("https://foodish-api.herokuapp.com/images/biryani/biryani17.jpg"),
        fetch("https://foodish-api.herokuapp.com/images/pizza/pizza4.jpg"),
        fetch("https://foodish-api.herokuapp.com/images/rice/rice6.jpg"),
        fetch("https://foodish-api.herokuapp.com/images/burger"),
        fetch("https://foodish-api.herokuapp.com/images/dessert/dessert27.jpg"),
        
    ])

    countryArray = ["India", "Italy", "China", "United States", "France"]
    // map
    {
        dishImage: "India"
        country: "Italy"

    }
    dishImage.map(dishImage, index) => {
        return (
            <p>
                key={}
            </p>
        )
    }


    

    const getRandomDish = () => {
        fetch("https://foodish-api.herokuapp.com/images/biryani")
        .then((response) => response.json())
        .then((response) => setRandomImage(response));
    }

    useEffect(()=> {
    
        // getRandomImage();
     }, []);


     return (
        <>
        <h2> Can you guess where I'm from?</h2>
        <Dish RandomImage={RandomImage} />
     
        </>
     )
}

export default DishGuesser;