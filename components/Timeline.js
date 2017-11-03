import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ timelineData }) => {
    return (
        <div className='timeline'>
            {timelineData.map((timelineItemData, index) => (
                <TimelineItem key={timelineItemData.id} {...timelineItemData} />
            ))}
        </div>
    );
};

export default Timeline;