import React from 'react';
import classNames from 'classnames';



import './List.scss';
import Badge from "../Badge/Badge";


const List = ({items, isRemovable,onClick}) => {
    return (
        <ul className="list" onClick={onClick}>
            {
                items.map((obj, i) => {
                    return (
                        <li key={i}
                            className={classNames(obj.className,{'active':obj.active} )}>
                            <i>{obj.icon ? obj.icon : <Badge color={obj.color}/> }</i>
                            <span>{obj.name}</span>
                        </li>)
                })
            }
        </ul>
    )
};

export default List;