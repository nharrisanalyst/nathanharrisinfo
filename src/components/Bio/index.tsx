import './skill.css';
import './bio.css';

type skillType ={
    front_end:Array<string>;
    data_vis:Array<string>;
    back_end:Array<string>;
}


type bioProps ={
    intro:string;
    bio:string;
    skills:skillType;
    image_src:string;
}

export const Skill =({skill}:{skill:string}) =>(
    <div className='bio-skill-skill'>{skill}</div>
);


const Bio =({intro, bio,skills,image_src}:bioProps)=>{

    return(
        <div className='bio-main'>
            <div className='bio-title'>ME</div>
            <div>
            <img src={image_src} className='skills-img-me' />
            <div className='bio-intro'>{intro}</div>
            </div>
            <div className='bio-bio'>{bio}</div>
            
            <div className='skills'>
                <div className='skills-section'>
                    <div className='skills-title'>Front End</div>
                        <div className='skills-cont'>
                            {skills.front_end.map(s=>(<Skill skill={s} />))}
                        </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-title'>Data Visualization</div>
                        <div className='skills-cont'>
                            {skills.data_vis.map(s=>(<Skill skill={s} />))}
                        </div>
                </div>
                <div className='skills-section'>
                    <div className='skills-title'>Back End/Data</div>
                    <div className='skills-cont'>
                        {skills.back_end.map(s=>(<Skill skill={s} />))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bio;