import Task from './';
import { useParams } from 'react-router-dom'; 
import data from '../../pages/Work/work.json';

import './dynamicTask.css';

const DynamicTask =() =>{
    const { taskName } = useParams();
    const taskData = data.task.filter((d:any)=>d.name === taskName);
    return (
        <div className='work'>
            <Task {...taskData[0]} />
        </div>
     )
    }

export default DynamicTask;