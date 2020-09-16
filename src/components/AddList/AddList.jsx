import React, {useState} from "react"
import List from "../List/List";
import Badge from "../Badge/Badge";
import closeSvg from '../../assets/img/close.svg'

import './AddButtonList.scss'


const AddList = ({colors}) => {
    const [state, setState] = useState(false);
    const [selectedColor, setSelected] = useState(colors[0].id);

    return (
        <div className='add-list'>
            <List items={[
                {
                    className: 'list__add-button',
                    icon:
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className='list__add-button'
                        >
                            <path
                                d="M8 1V15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 8H15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>,
                    name: 'Добавить стисок',
                },
            ]}
                  onClick={() => setState(true)}
            />
            {state &&
            <div className="add-list__popup">
                <img onClick={()=>setState(false)} className="add-list__popup-close-btn" alt={"close dtn"} src={closeSvg}/>
                <input type="text" placeholder={'Название списка'} className='field'/>
                <div className="add-list__popup-colors">
                    {
                        colors.map((color) =>
                            <Badge
                                onClick={() => setSelected(color.id)}
                                key={color.id}
                                color={color.name}
                                className={selectedColor === color.id && 'active'}
                            />
                        )
                    }
                </div>
                <button className='button'>Добавить</button>
            </div>}
        </div>
    );
}
export default AddList;