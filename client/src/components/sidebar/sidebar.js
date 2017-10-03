import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <p className="sidebar-content">{props.content}</p>
        </div>
    );
};

export default Sidebar;