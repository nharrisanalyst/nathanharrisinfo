import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './card.css';


export type CardProps ={
    imageSrc:string;
    linkTo:string;
    name:string;
}

const Card = ({imageSrc,linkTo, name}:CardProps) =>{
    const [showBanner, setShowBanner] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(0);
    const link = linkTo;
    const handleOnHover=()=>{
        setShowBanner(true);
    }
    const handHoverOut =()=>{
        setShowBanner(false);
    }
    

    useEffect(()=>{
        console.log('changing')
        let newOpacity = showBanner?0.5:0;
        setOpacity(newOpacity);

    },[showBanner])
    let classBanner = opacity ===0?"card-banner banner-gone":"card-banner banner-appear";
    let imageBanner = opacity ===0?"image-expand":"image-appear";
    return(
        <div className='card-container' 
             onMouseEnter={() => handleOnHover()}
             onMouseLeave={() => handHoverOut()}    
        >
            <Link to={link}>
                <img className={imageBanner} src={imageSrc} />
            </Link> 
            <div className={classBanner}>{name.replaceAll("_"," ")}</div>
        </div>
    )
}

export default Card;