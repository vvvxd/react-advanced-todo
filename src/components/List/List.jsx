import React from 'react';
import classNames from 'classnames';
import Badge from "../Badge/Badge";

import removeSvg from '../../assets/img/remove.svg';

import './List.scss';


const List = ({items, isRemovable, onClick,onRemove}) => {
    const removeList = (obj)=>{
        if (window.confirm('Вы действительно хотите удалить список ?')){
            onRemove(obj);
        }
    }
    return (
        <ul className="list" onClick={onClick}>
            {
                items.map((obj, i) => {
                    return (
                        <li
                            key={i}
                            className={classNames(obj.className, {'active': obj.active})}
                        >
                            <i>
                                {obj.icon
                                    ? obj.icon
                                    : <Badge color={obj.color}
                                    />}
                            </i>
                            <span>{obj.name}</span>
                            {
                                isRemovable &&
                                <img
                                    className='list__remove-icon'
                                    src={removeSvg}
                                    alt="remove"
                                    onClick={()=>removeList(obj)}
                                />
                            }
                        </li>)
                })
            }
        </ul>
    )
};

export default List;