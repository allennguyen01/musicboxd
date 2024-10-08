import PropTypes from 'prop-types';
import ReviewRatingStars from './ReviewRatingStars';

export default function ReviewedAlbumCard({
	albumName,
	albumCoverURL,
	albumYear,
	createDate,
	rating,
	review,
}) {
	return (
		<div className='card card-side pb-4 rounded-none gap-4 border-b-[1px] border-neutral-600'>
			<figure className='flex-none self-start'>
				<img
					src={albumCoverURL}
					alt={`${albumName} album cover`}
					className='size-28 rounded-sm'
				/>
			</figure>
			<div className='card-body p-0 text-ellipsis overflow-hidden'>
				<h2 className='card-title items-baseline font-semibold text-white'>
					{albumName}
					<span className='font-sans font-thin text-neutral-content text-lg'>
						{albumYear}
					</span>
				</h2>

				<div className='flex items-center gap-2'>
					<ReviewRatingStars
						albumName={albumName}
						readOnly={true}
						rating={rating}
					/>
					<p className='text-sm'>
						Reviewed on{' '}
						{new Date(createDate).toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</p>
				</div>
				<p className=''>{review}</p>
			</div>
		</div>
	);
}

ReviewedAlbumCard.propTypes = {
	albumName: PropTypes.string.isRequired,
	albumCoverURL: PropTypes.string,
	albumYear: PropTypes.number,
	createDate: PropTypes.string,
	rating: PropTypes.number,
	review: PropTypes.string,
};
