import React from 'react';

export const TasksListsListPanel = () => {
    return (
        <div className="tasks-lists-list-panel">
            <input type="text" className="text-input" placeholder="Search"/>
            <div className="sort-select-box">
                <div>
                    <span className="dropdown-arrow"></span>
                    <p>Sort by</p>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};
