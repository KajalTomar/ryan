import React, {Component} from 'react';
import './App.css'
import Quote from './components/Quote';
import Streak from './components/Streak';

class App extends Component {
	render(){
		return (
			<div className="App">
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
