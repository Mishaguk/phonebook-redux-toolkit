import reactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
reactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);