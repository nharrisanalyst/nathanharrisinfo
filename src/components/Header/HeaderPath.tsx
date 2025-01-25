import Header from './';
import { useLocation } from 'react-router-dom';

const HeaderPath =() =>{
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            <Header navigation={pathname} />
        </>
    )
}

export default HeaderPath;