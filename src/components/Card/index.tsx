import { Link } from 'react-router-dom';

export type CardProps ={
    imageSrc:string;
    linkTo:string;
}

const Card = ({imageSrc,linkTo}:CardProps) =>{
    const link = `/work/${linkTo}`;
    return(
        <div className='card-container' >
            <Link to={link}>
                <img src={imageSrc} />
            </Link>
        </div>
    )
}

export default Card;