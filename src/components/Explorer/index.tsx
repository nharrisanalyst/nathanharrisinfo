import Card, {CardProps} from '../Card';
import './explorer.css';

type ExplorerProps = {
    cards:Array<CardProps>;
}

const Explorer =({cards}:ExplorerProps) =>(

    <div className='explorer-container'>
        <div className='title-explorer'>Explore</div>
        <div className='explorer-cards'>
            {cards.map((d)=>(<Card {...d} />))}
        </div>
    </div>

);

export default Explorer;