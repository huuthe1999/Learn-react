import Country from '../Country/Country';
import './CountryList.css';

const CountryList = () => {
	return (
		<div className='countries'>
			{[...Array(8)].map((country, index) => (
				<Country key={index} />
			))}
		</div>
	);
};

export default CountryList;
