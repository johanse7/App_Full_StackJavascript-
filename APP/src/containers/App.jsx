import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store';
import PostTextContainer from './PostTextContainer';
import { GlobalStyle } from '../assest/styles/Global'


const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle font="'Merienda', sans-serif" />
			<PostTextContainer/>
		</Provider>
	);
}

export default App;