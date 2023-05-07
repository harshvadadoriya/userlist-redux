import UserList from './components/UserList/UserList';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const environment = import.meta.env;

if (environment.REACT_APP_NODE_DEV === 'production') {
	disableReactDevTools();
}

const App = (): JSX.Element => {
	return (
		<>
			<UserList />
		</>
	);
};

export default App;
