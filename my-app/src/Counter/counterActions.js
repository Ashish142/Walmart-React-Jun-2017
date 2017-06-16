let counterActionCreators = {
	increment : function(){
		return { type : 'INCREMENT' };
	},
	decrement : function(){
		return { type : 'DECREMENT' };
	}
};
export default counterActionCreators;