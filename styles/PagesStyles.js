import css from 'styled-jsx/css';

const TvShows = css`
  .tvshows-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
  }
  .show-details {
  }
  .show-details__poster {
    height: 200px;
    object-fit: cover;
  }
`;

export default TvShows;
