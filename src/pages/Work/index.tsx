import Task from '../../components/Task';
// @ts-ignore
import data from './work.json';

import'./work.css';


const Work =()=>{
    return(
        <div className='work'>
        {data.task.map((t:any)=>(<Task {...t} />))}
        </div>
    )
  }

export default Work;