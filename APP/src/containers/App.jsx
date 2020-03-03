import React from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store';
import Header from '../components/Header';
import Form from '../components/Form';
import TextList from '../components/TextList';
import { WrapperApp } from '../assest/styles/components/App'
import { GlobalStyle } from '../assest/styles/Global'


const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle font="'Merienda', sans-serif" />
			<WrapperApp>
				<Header>
					<h1>App test JavaScript full Stack</h1>
				</Header>
				<Form />
				<TextList />
			</WrapperApp>
		</Provider>
	);
}

export default App;