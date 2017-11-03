import React from 'react';
import TimelineRow from './TimelineRow';

const Timeline = ({ timelineData }) => {
    return (
        <div className='timeline'>
            {timelineData.map((timelineRowData, index) => (
                <TimelineRow key={timelineRowData.id} {...timelineRowData} />
            ))}
        </div>
    );
};

export default Timeline;