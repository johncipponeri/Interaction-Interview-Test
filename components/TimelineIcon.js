import React from 'react';

const TimelineIcon = ({ iconName }) => {
    return (
        <div className='timelineIcon fl'>
            <img src={iconName} />
        </div>
    );
}

export default TimelineIcon;