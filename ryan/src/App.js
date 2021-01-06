import React, {Component} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import Particles from 'react-particles-js';
import './App.css'
import Quote from './components/Quote';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';
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
	constructor(){
		super();
		this.state = {
			route: 'SignIn',
			data: []
		}
	}

	onRouteChange = (newRoute) => {
			this.setState({route: newRoute});			
	}

	/*
	componentDidMount() {
		this.setState({ data: database})
	}
	*/
	
	render(){
		return (
			<div className="App">
				<Particles className='particles'
					params={particlesOptions}
				/>

				{ this.state.route === 'home' 
					? <div>
					<Navigation changeRoute={this.onRouteChange}/>
					<Quote />
					<Streak />
					<StreakCalendar />
					</div>
					: <SignIn changeRoute={this.onRouteChange} /> 
				}

				 {/*
				<Badges />
				<Stats /> */ }
			</div>
		);
	}
}

export default App;
