import axios from 'axios';
import { useEffect, useState } from 'react';
import './app.css';
import Control from './components/control/Control';
import CountryList from './components/country/CountryList/CountryList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import useDebounce from './components/hooks/useDebounce';

function App() {
	const [countries, setCountries] = useState([]);
	const [filterCoutries, setFilterCountries] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const debouncedSearchTerm = useDebounce(searchInput, 500);

	const handleChange = e => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(
					'https://restcountries.com/v3.1/all',
				);
				setCountries(response.data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		if (debouncedSearchTerm) {
			setIsSearching(true);
			const filteredCountries = countries.filter(
				country =>
					country.name.common
						.toLowerCase()
						.includes(debouncedSearchTerm.toLowerCase()) ||
					country.capital?.[0]
						.toLowerCase()
						.includes(debouncedSearchTerm.toLowerCase()),
			);
			setFilterCountries(filteredCountries);
			setIsSearching(false);
		} else {
			setIsSearching(false);
			setFilterCountries(countries);
		}
	}, [debouncedSearchTerm, countries]);
	return (
		<div className='app'>
			<Header totalCountry={countries.length} isLoading={isLoading} />
			<Control handleChange={handleChange} isLoading={isLoading} />
			<CountryList
				data={filterCoutries}
				isSearching={isSearching}
				isLoading={isLoading}
			/>
			<Footer />
		</div>
	);
}

export default App;
