window.StateManager = (function(){
	let _reducer = null;
	let _currentState = undefined;
	let _listeners = [];

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listeners.push(listenerFn);
	}
	function trigger(){
		_listeners.forEach(listenerFn => listenerFn());
	}
	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState !== _currentState){
			_currentState = newState;
			trigger();
		}
	}
	function createStore(reducer){
		_reducer = reducer;
		var init_action = { type : '@@INIT_ACTION' };
		_currentState = reducer(_currentState, init_action)
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		};
	}
	return {
		createStore : createStore
	}
})();