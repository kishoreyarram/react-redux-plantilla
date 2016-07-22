import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './comun/Header';
import Footer from './comun/Footer';

class App extends React.Component {
    constructor(props, context){
        super(props, context);
        this.toggleMenu=this.toggleMenu.bind(this);
        this.state={
            isOpened:false
        };
        
    }
    
    toggleMenu(event) {
        event.preventDefault();
        this.setState({isOpened:!this.state.isOpened});
    }
    
	render() {
		let components = this.props.children;
		return (
			<div>
				<Header />
				<div className="wrapGeneral">
					{components}
				</div>
				<Footer/>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxCallsInProgress > 0
	};
}

export default connect(mapStateToProps)(App);
