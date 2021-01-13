import React from 'react';

class SignIn extends React.Component {

    handleKeyPress = (event) => {    
        if(event.key === "Enter"){
            fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    givenPassword: this.state.signInPassword
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data !== 'You are not Ryan!'){ // if we recieve data then load it in                 
                    this.props.changeRoute('home')
                }
            })
            event.preventDefault();
        } 
    }

    onPasswordChange = event => {
        this.setState({signInPassword: event.target.value})
    }

    render() {    
        return(<article className="br3 pv4 ba white b--white-10 mv6 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 black-80">
            <form className="measure">
                <legend className="white f3 pv2 fw6 ph0 mh0 o-90">What's the password, Ryan?</legend>
                <div className="mv3">
                <input 
                    onChange = {this.onPasswordChange}
                    onKeyPress = {this.handleKeyPress}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" />
                </div>
            </form>
        </main>
    </article>
        );
    }
}

export default SignIn;