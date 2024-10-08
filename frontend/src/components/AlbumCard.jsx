import PropTypes from 'prop-types';
import ReviewModalForm from './ReviewModalForm';
import { FaSpotify } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ISO3166ToString from '../data/ISO3166-1.alpha-2';
import TextCollapse from './TextCollapse';

export default function AlbumCard({ album }) {
	const albumID = album.id;
	const albumName = album.name;
	const albumArtists = album.artists;
	const albumCoverURL = album.images[0].url;
	const albumReleaseDate = new Date(album.release_date);
	const albumReleaseYear = albumReleaseDate.getFullYear();
	const albumAvailableMarkets = album.available_markets
		.map((album) => {
			return ISO3166ToString[album.toUpperCase()];
		})
		.join(', ');
	const spotifyURL = album.external_urls.spotify;

	const navigate = useNavigate();

	return (
		<div>
			<div
				className='card card-side rounded-none pb-4 border-b-[1px] border-neutral-600 hover:cursor-pointer'
				onClick={() =>
					document.getElementById(`review-modal-${albumName}`).showModal()
				}
			>
				<img
					src={albumCoverURL}
					alt={`${albumName} album cover`}
					className='w-28 h-28 rounded-sm'
				/>
				<div className='card-body py-0'>
					<h2 className='card-title font-semibold text-white'>
						{albumName}
						<span className='font-sans font-thin text-neutral-content'>
							{albumReleaseYear}
						</span>

						<a
							href={spotifyURL}
							target='_blank'
							rel='noreferrer noopener'
							onClick={(e) => e.stopPropagation()}
						>
							<FaSpotify
								size={16}
								className='fill-neutral-500 hover:fill-white'
							/>
						</a>
					</h2>

					<TextCollapse text={`Available in: ${albumAvailableMarkets}`} />

					<div className='flex flex-row items-center'>
						<span className='font-thin mr-1'>Performed by </span>
						<div className='flex gap-1'>
							{albumArtists.map((artist) => (
								<button
									key={artist.id}
									className='btn btn-neutral btn-xs rounded-sm px-1 py-0'
									onClick={(e) => {
										e.stopPropagation();
										navigate(`/search/${artist.name}`);
									}}
								>
									{artist.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<ReviewModalForm
				albumID={albumID}
				albumName={albumName}
				albumCoverURL={albumCoverURL}
				albumYear={albumReleaseYear}
			/>
		</div>
	);
}

AlbumCard.propTypes = {
	album: PropTypes.object,
};
