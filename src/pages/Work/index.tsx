import {useEffect} from 'react';
import Task from '../../components/Task';
// @ts-ignore
import data from './work.json';

import'./work.css';


const Work =()=>{
    
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

    return(
        <div className='work'>
        {data.task.map((t:any)=>(<Task {...t} />))}
        </div>
    )
  }

export default Work;