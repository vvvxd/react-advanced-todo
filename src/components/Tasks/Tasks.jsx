import React from 'react';
import axios from 'axios';

import editSvg from '../../assets/img/edit.svg';
import AddTaskForm from "./AddTaskForm/AddTaskForm";

import './Tasks.scss'
import Task from "./Task/Task";


const Tasks = ({list, onCompleteTask, onEditTask, onAddTask, onRemoveTask, onEditTitle, withoutEmpty}) => {

    const editTitle = () => {
        const newTitle = window.prompt('Введите новый заголовок', list.name);
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            axios.patch('http://localhost:3001/lists/' + list.id, {
                name: newTitle,
            }).catch(() => {
                alert('Не удалось обновить название списка')
            })
        }
    }

    return (
        <div className="tasks">
            <h2 style={{color: list.color.hex}} className='tasks__title'>
                {list.name}
                <img onClick={editTitle} src={editSvg} alt="edit"/>
            </h2>
            <div className="tasks__items">
                {!withoutEmpty && list.tasks && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {list.tasks &&
                list.tasks.map((task) =>
                    <Task
                        onEdit={onEditTask}
                        list={list}
                        onComplete={onCompleteTask}
                        onRemove={onRemoveTask}
                        key={task.id}
                        {...task}
                    />
                )
                }
                <AddTaskForm key={list.id} list={list} onAddTask={onAddTask}/>
            </div>
        </div>
    );
};

export default Tasks;
