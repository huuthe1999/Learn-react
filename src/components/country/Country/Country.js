import './Country.css';

const Country = () => {
	return (
		<div className='country'>
			<div className='country__flag'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'
					alt='Afghanistan'
				/>
			</div>
			<h3 className='country__name'>AFGHANISTAN</h3>
			<div className='country__text'>
				<p>
					<span>Capital: </span>Kabul
				</p>
				<p>
					<span>Languages: </span>Pashto, Uzbek, Turkmen
				</p>
				<p>
					<span>Population: </span>40,218,234
				</p>
				<p>
					<span>Currency: </span>
				</p>
			</div>
		</div>
	);
};

export default Country;
