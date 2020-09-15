import React from 'react';

import './List.scss'


const List = ({items}) => {
    return (
        <ul className="list">
            {
                items.map(obj => {
                    return (
                        <li className={obj.active ? 'active' : ''}>
                            <i>{obj.icon ? obj.icon : <i className={`badge badge--${obj.color}`}> </i>}</i>
                            <span>{obj.name}</span>
                        </li>)
                })
            }
        </ul>
    )
};

export default List;