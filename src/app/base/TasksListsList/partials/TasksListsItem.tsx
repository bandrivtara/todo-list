import React from 'react';

export const TasksListsItem = () => {
    return (
        <div className="task-list-item-box">
            <p className="task-list-name">
                ToDo List Name
            </p>
            <p className="task-list-date">
                Created at: 18-03-2021
            </p>
            <p className="task-list-status">
                Complated: 15 Uncomplated: 10 All: 25
            </p>
        </div>
    );
};
