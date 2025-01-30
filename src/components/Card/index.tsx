import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import './card.css';


export type CardProps ={
    imageSrc:string;
    linkTo:string;
    name:string;
}

const Card = ({imageSrc,linkTo, name}:CardProps) =>{
    const [showBanner, setShowBanner] = useState<boolean>(false);
    const [opacity, setOpacity] = useState<number>(0);
    const link = `/work/${linkTo}`;
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
    let classBanner = opacity ===0?"card-banner":"card-banner banner-appear";
    return(
        <div className='card-container' 
             onMouseEnter={() => handleOnHover()}
             onMouseLeave={() => handHoverOut()}    
        >
            <Link to={link}>
            <AspectRatio ratio={24/12}>
                <img src={imageSrc} />
            </AspectRatio>
            </Link> 
            <div className={classBanner}>{name.replace("_"," ")}</div>
        </div>
    )
}

export default Card;