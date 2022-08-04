import './app.css';
import Control from './components/control/Control';
import CountryList from './components/country/CountryList/CountryList';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
	return (
		<div className='app'>
			<Header />
			<Control />
			<CountryList />
			<Footer />
		</div>
	);
}

export default App;
