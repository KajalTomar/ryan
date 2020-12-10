import React, {Component} from 'react';
import './App.css'
import Quote from './components/Quote';


class App extends Component {
	render(){
		return (
			<div className="App">
				<Quote />
				{ /*<Logo />
				<Streak />
				<Graph />
				<Badges />
				<Stats /> */ }
			</div>
		);
	}
}

export default App;
