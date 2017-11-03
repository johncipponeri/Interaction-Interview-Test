import React from 'react';
import Style from '../style.css';

const TimelineItem = ({
    id,
    title,
    subTitle,
    color,
    backgroundColor,
    icon,
    judgementIcon,
    evaluation,
    notes,
}) => {
    return (
        <div className='timelineItem'>
            <h1>{title}</h1>

            {!subTitle && 
                <hr /> 
            }

            {subTitle && 
                <h2>{subTitle}</h2>
            }

            {evaluation &&
                <div className='evaluation'>
                    <p className='fl'>{evaluation.text}</p>
                    {evaluation.score &&
                        <p className='fr'>{evaluation.score}/{evaluation.maxScore}</p>
                    }
                </div>
            }

            {notes &&
                <p>{notes}</p>
            }
        </div>  
    );
}

export default TimelineItem;
