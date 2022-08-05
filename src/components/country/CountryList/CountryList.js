import Loading from '../../loading.js';
import Country from '../Country/Country';
import './CountryList.css';

const CountryList = ({ data, isSearching }) => {
	return (
		<div className='countries'>
			{isSearching ? (
				<Loading type='spin' color='#60dcfc' width='80%' height='80%' />
			) : (
				data.length > 0 &&
				data.map((country, index) => (
					<Country key={index} country={country} />
				))
			)}
		</div>
	);
};

export default CountryList;
