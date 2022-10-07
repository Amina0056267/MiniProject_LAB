

const image = ({dishSrc}) => {
    return dishSrc ? <img src={dishSrc} alt="A random image of a dish" /> : <p>Loading image...</p>



}

export default image;