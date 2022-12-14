import React from 'react';

import './List.scss';

const List = ({taskLabels})=>{
   return(
    <ul className="todo__list">
        
    {taskLabels.map(item=>(
        <li className={item.active ? "active" : " "}>
            <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
            <span>{item.name}</span>
        </li>
    ))}
        
    </ul>
   );
};

export default List;

