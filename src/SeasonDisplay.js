import './SeasonDisplay.scss'
import React from 'react';


const seasonConfig = {
    summer: {
        text: 'Its hot!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it\'s chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

// Create a component

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
	 	<i className={`icon-left massive ${iconName} icon`} />
	 	<h1 className="sezon">{text}</h1>
	 	<p>Twoja lokalizacja</p>
	 	<h5>{props.lat}</h5>
	 	<h5>{props.lng}</h5>
	 	<i className={`icon-right massive ${iconName} icon`} />
	 </div>
    );
}

export default SeasonDisplay;