import {useEffect} from 'react';
import Task from './';
import { useParams } from 'react-router-dom'; 
// @ts-ignore
import data from '../../pages/Work/work.json';

import './dynamicTask.css';

const DynamicTask =() =>{
    const { taskName } = useParams();
    const taskData = data.task.filter((d:any)=>d.name === taskName);
    
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <div className='work'>
            <Task {...taskData[0]} />
        </div>
     )
    }

export default DynamicTask;