import {useState} from 'react';
import './styles.css';

function Counter(){
    const [contador, setContador] = useState(0);
    return(        
        <button className="btn" onClick={()=> setContador(contador + 1)}>{contador}</button>
    );
}
export default Counter;