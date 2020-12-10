import React from 'react';
import flame from './flame.gif';

const Streak = () => {
	return(
		<div className="Streak" style={{display: 'flex', flexDirection:'column'}}>
			<p className='f1 yellow mv0 pill b--washed-yellow'>100</p>
			<img id="flame" src={flame} alt='imagine that there is a gif flame here'/>
		</div>
	);

}

export default Streak;
