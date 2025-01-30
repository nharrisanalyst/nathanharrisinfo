import './task.css';

type mainText ={
    par1:string;
    par2:string;
}

type TaskData ={
    title:string;
    mainText:mainText;
    myRole:Array<string>;

}

type TaskProps ={
    name:string;
    data:TaskData;
    
}


const Task =({data,name}:TaskProps)=>{
    const img_1 = `/images/work/${name}/1.png`;
    const img_2 = `/images/work/${name}/2.png`;
    return(
        <div className='task'>
            <div className='task-title-title'>{name.replace("_", " ")}</div>
            <div className ='task-img-1-discription'> 
                    <img  className='task-img-1' src={img_1} />
                    <div className="task-description-cont" >
                        <div className='task-main-container'>
                            <div className='task-title'>{data.title}</div>
                            <div className="task-par1">{data.mainText.par1}</div>
                            <div className="task-par2">{data.mainText.par2}</div>
                        </div>
                        <div className='task-my-role'>
                            <div className='my-role-title'>My Role</div>
                            {data.myRole.map((r)=>(<div className='task-role-text'>{r}</div>))}
                        </div>
                    </div>
            </div>
            <div className='task-img-2-cont'>
                <img className='task-img-2' src={img_2} />
            </div>
        </div>
    )
}

export default Task