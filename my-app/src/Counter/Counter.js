import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterActionCreators from './counterActions';


let Counter = function({increment, decrement, value}){
	return(
		<div>
			<input type="button" value="DECREMENT" onClick={increment}/>
			<span> {value} </span>
			<input type="button" value="INCREMENT" onClick={decrement}/>
		</div>
	)
};

export default connect(
	(state) => ({ value : state.counter }),
	(dispatch) => bindActionCreators(counterActionCreators, dispatch) 
)(Counter);