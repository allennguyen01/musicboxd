import PropTypes from 'prop-types';
import ReviewRatingStars from './ReviewRatingStars';

export default function AlbumCard({ album }) {
	const albumName = album.name;
	const albumArtists = album.artists.map((artist) => artist.name).join(', ');
	const albumCoverArt = album.images[0].url;
	const albumReleaseDate = new Date(album.release_date);
	const albumReleaseYear = albumReleaseDate.getFullYear();

	return (
		<div>
			<div
				className='card card-side items-center bg-zinc-900 w-full h-full py-4 px-6 hover:cursor-pointer'
				onClick={() =>
					document.getElementById(`review-modal-${albumName}`).showModal()
				}
			>
				<img
					src={albumCoverArt}
					alt={`${albumName} album cover`}
					className='w-28 h-28 rounded-lg'
				/>
				<div className='card-body'>
					<h2 className='card-title font-semibold text-white flex items-end'>
						{albumName}
						<span className='font-sans font-thin text-neutral-content'>
							{albumReleaseYear}
						</span>
					</h2>

					<p>
						<span className='font-thin'>Performed by </span>
						{albumArtists}
					</p>
				</div>
			</div>

			<ReviewModal albumName={albumName} />

			<div className='divider'></div>
		</div>
	);
}

function ReviewModal({ albumName }) {
	return (
		<dialog
			id={`review-modal-${albumName}`}
			className='modal'
		>
			<div className='modal-box'>
				<form method='dialog'>
					{/* if there is a button in form, it will close the modal */}
					<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
						✕
					</button>
				</form>
				<h3 className='font-bold text-xl'>{albumName}</h3>

				<ReviewTextBox />
				<ReviewRatingStars albumName={albumName} />

				<div className='modal-action'>
					<form method='dialog'>
						<button className='btn'>Save</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

function ReviewTextBox() {
	return (
		<label className='form-control'>
			<div className='label py-2 px-0'>
				<span className='label-text text-base'>Review</span>
			</div>
			<textarea
				className='textarea textarea-bordered h-24'
				placeholder='Leave a review...'
			></textarea>
		</label>
	);
}

AlbumCard.propTypes = {
	album: PropTypes.object,
};

ReviewModal.propTypes = {
	albumName: PropTypes.string,
};
