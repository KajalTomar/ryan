import React from 'react';
// import flame from './flame.gif';

const Streak = ({streak}) => {
	return(
		<div className="Streak pt5" style={{display: 'flex', flexDirection:'column'}}>
			<p className='f6 pb2 white pill b--washed-yellow o=60'>YOUR CURRENT STREAK IS</p>
			<p className='f1 white mv0 pill b--washed-yellow o=80'>{streak}</p>
			
			{/* <img id="flame" src={flame} alt='imagine that there is a gif flame here'/>*/}
		</div>
	);

}

export default Streak;
