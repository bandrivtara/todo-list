import React from 'react';
import {TasksListModalContainer} from "./TasksListModal/TasksListModalContainer";
import {TasksListsListPanel} from "./partials/TasksListsListPanel";
import {TasksListsItem} from "./partials/TasksListsItem";

export const TasksListsList = () => {
    return (
        <div className="tasks-lists-list-container">
            <TasksListsListPanel/>
            <div className="tasks-lists-list">
                <TasksListsItem/>
            </div>
            <div className="add-list"/>

            <TasksListModalContainer/>
        </div>
    );
};
