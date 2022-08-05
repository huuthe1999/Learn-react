import Loading from '../loading.js';
import './Header.css';

const Header = ({ totalCountry, isLoading }) => {
	return (
		<header className='header'>
			<h2>World Countries Data</h2>
			<div className='header__subtitle'>
				Currently, we have{' '}
				{isLoading ? (
					<Loading
						type='spinningBubbles'
						width={32}
						height={32}
						isCustom
					/>
				) : (
					totalCountry
				)}{' '}
				countries
			</div>
		</header>
	);
};

export default Header;
