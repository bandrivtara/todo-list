import React from 'react';
import {TasksListPanel} from "./partials/TasksListPanel";
import {TaskItem} from "./partials/TaskItem";
import {AddTaskItem} from "./partials/AddTaskItem";

export const TasksListModal = () => {
    return (
        <div className="tasks-list-modal">
            <div className="tasks-list-container">
                <TasksListPanel/>
                <div className="tasks-list">
                    <TaskItem/>
                    <AddTaskItem/>
                </div>
                <div className="btn-group-panel">
                    <button className="btn-transparent">
                        <a href="">cancel</a>
                    </button>
                    <button className="btn">
                        <a href="">save</a>
                    </button>
                </div>
            </div>
            <div className="tasks-list-overlay"/>
        </div>
    );
};
