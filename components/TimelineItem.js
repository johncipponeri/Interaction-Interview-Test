import React from 'react';
import Style from '../style.css';

const TimelineItem = ({
    id,
    title,
    subtitle,
    color,
    backgroundColor,
    judgementIcon,
    evaluation,
    notes,
}) => {
    const containerClasses = `timelineItem ${backgroundColor}`;
    const evaluationClasses = `evaluation ${color}`;
    const iconSvg = evaluation ? `../assets/svgs/${evaluation.icon}.svg` : '';

    return (
        <div className={containerClasses}>
            <h1>{title}</h1>

            {!subtitle && (evaluation || notes) && 
                <hr /> 
            }

            {subtitle && 
                <h2 className={color}>{subtitle}</h2>
            }

            {evaluation &&
                <div className={evaluationClasses}>
                    <p className='fl'>{evaluation.text}</p>
                    {evaluation && 
                        <div className='evaluationIcon fr'>
                            <img src={iconSvg} />
                        </div>
                    }
                    {evaluation.score &&
                        <div class='evaluationScore'>
                            <p className='fr'>{evaluation.score}/{evaluation.maxScore}</p>
                        </div>
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
