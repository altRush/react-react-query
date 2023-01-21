import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';

function App() {
	const { isLoading, error, data } = useQuery('repoData', () =>
		axios('https://pokeapi.co/api/v2/pokemon/blastoise').then(res => res.data)
	);

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	const { abilities } = data;

	return (
		<div className="App">
			{abilities.map((record, i) => {
				const { ability } = record;
				return <div key={i}>{ability.name}</div>;
			})}
		</div>
	);
}

export default App;
