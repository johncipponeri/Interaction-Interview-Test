import React from 'react';

import TimelineItem from './TimelineItem';
import TimelineItemTime from './TimelineItemTime';

const TimelineRow = (timelineRowData) => {
    return (
        <div className='timeline'>
            <TimelineItemTime {...timelineRowData} />
            <TimelineItem {...timelineRowData} />
        </div>
    );
}

export default TimelineRow;