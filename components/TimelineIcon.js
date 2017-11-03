import React from 'react';

const TimelineIcon = ({ icon }) => {
    const iconSvg = '../assets/svgs/' + icon + '.svg';

    return (
        <div className='timelineIcon fl'>
            <img src={iconSvg} />
        </div>
    );
}

export default TimelineIcon;