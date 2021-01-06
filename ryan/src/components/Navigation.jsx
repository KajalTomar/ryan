import React from 'react';

const Navigation = ({changeRoute}) => {
    return(<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
        <p 
        onClick={() => changeRoute('SignIn')}
        className = 'white hover-light-blue link pr5 pa3 f4 Roboto o-40 lh-solid tc pointer'> Peace Out</p>
        </nav>
    );
}

export default Navigation;