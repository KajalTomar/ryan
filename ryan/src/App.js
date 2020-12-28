import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css'
import Quote from './components/Quote';
import Streak from './components/Streak';

const particlesOptions = {
	particles: {
		number: {
			value: 110,
			density: {
				enable: true,
				value_area: 800
			}
		},
		line_linked:{
			color: {
				value: "#FFECFF"
			},
			opacity: 0.8
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
				{ /* <Graph />
				<Badges />
				<Stats /> */ }
			</div>
		);
	}
}

export default App;
