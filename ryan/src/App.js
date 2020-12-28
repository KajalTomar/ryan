import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css'
import Quote from './components/Quote';
import Streak from './components/Streak';
import StreakCalendar from './components/StreakCalendar';

const particlesOptions = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 1000
			}
		},
		line_linked:{
			color: {
				value: "#FFECFF"
			},
			opacity: 0.5
		}		
	},
	interactivity: {
		detect_on: "window",
		events: {
			onhover: {
				enable: true,
				mode: "repulse"
			}
		},
		modes: {
			repulse: 500
		}
	}
}

class App extends Component {
	render(){
		return (
			<div className="App">
				<Particles className='particles'
					params={particlesOptions}
				/>
				<Quote />
				<Streak />
				<StreakCalendar />

				{ /*
				<Badges />
				<Stats /> */ }
			</div>
		);
	}
}

export default App;
