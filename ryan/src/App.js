import React, {Component} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import Particles from 'react-particles-js';
import './App.css'
import Quote from './components/Quote';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';
import Streak from './components/Streak';
import HeatMap from './components/heatMap';

const particlesOptions = {
	particles: {
		number: {
			value: 50,
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
			streakinfo:[],
		}
	}

	onRouteChange = (newRoute) => {
		
			if(newRoute === 'home'){
				this.loadData();
			}

			this.setState({route: newRoute});	
	}

	loadData = () => {
		fetch('http://localhost:3000/home', {
                method: 'post',
				headers: {'Accept': 'application/json'},

			})
			.then(response => response.json())
			.then(data => this.setState({streakinfo:data})		
		);					
	}
	
	render(){
		const {streakinfo} = this.state;
		var currentStreak;

		if(typeof streakinfo[streakinfo.length-1] !== 'undefined') {
			currentStreak = streakinfo[streakinfo.length-1].streak;
		}

		return (
			<div className="App" >
				{ this.state.route === 'home' 
					? <div >
					<Particles className='particles'
						params={particlesOptions}
					/>
					<Navigation changeRoute={this.onRouteChange}/>
					<Quote />
					<Streak streak = {currentStreak}/>
					<HeatMap data = {streakinfo}/> 
					</div>
					: 
						<div>
							<SignIn changeRoute={this.onRouteChange} />
						</div> 
				}

				 {/*
				<Badges />
				<Stats /> */ }
			</div>
		);
	}
}

export default App;
