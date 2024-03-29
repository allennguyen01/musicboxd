import PropTypes from 'prop-types';
import SearchBox from './Searchbox';

export default function NavBar({ search, setSearchInput }) {
	return (
		<section className='navbar bg-zinc-900 justify-center'>
			<div className='flex-1 max-w-3xl'>
				<a className='btn btn-ghost font-bold text-2xl text-white'>
					Musicboxd
				</a>
			</div>
			<SearchBox search={search} setSearchInput={setSearchInput} />
		</section>
	);
}

NavBar.propTypes = {
	search: PropTypes.func,
	setSearchInput: PropTypes.func,
};
