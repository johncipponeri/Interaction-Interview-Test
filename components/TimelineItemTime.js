import React from 'react';

import moment from 'moment';

const TimelineItemTime = ({ time }) => {
    return <div className='timelineTime fl'>
        {moment.utc(time * 1000).format('HH:mm:ss')}
    </div>;
}

export default TimelineItemTime;