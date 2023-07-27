import css from './MovieInfo.module.css';

export const MovieInfo = () => {
  return (
    <div className={css.movieContainer}>
      <img
        className={css.movieImage}
        src="https://via.placeholder.com/200x100"
        alt=""
      ></img>
      <div className={css.movieInfo}>
        <h3 className={css.title}>Nazwa Filmu</h3>
        <p className={css.description}>'User Scores: ${74}%'</p>
        <h5 className={css.title}>Overview</h5>
        <p className={css.description}>
          Lorem ipsum dolor sit amet. Hic consequatur fugit sed officiis
          voluptatem non libero maxime. Aut sunt obcaecati sed assumenda officia
          quo omnis corporis est neque quas aut voluptas quae.
        </p>
        <h6 className={css.title}>Genres</h6>
        <p className={css.description}>Drama History War</p>
      </div>
    </div>
  );
};
