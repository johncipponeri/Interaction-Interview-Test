import React from 'react';

import TimelineItem from './TimelineItem';
import TimelineIcon from './TimelineIcon';
import TimelineItemTime from './TimelineItemTime';

const TimelineRow = (timelineRowData) => {
    return (
        <div className='timeline'>
            <TimelineItemTime {...timelineRowData} />
            <TimelineIcon {...timelineRowData} />
            <TimelineItem {...timelineRowData} />
        </div>
    );
}

export default TimelineRow;