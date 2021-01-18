// Imports:
import axios from 'axios';
import parse from 'react-html-parser';
// Components
import styles from '../../styles/PagesStyles';
import Cast from '../../components/Cast';

// ::::: MAIN :::::
const ShowDetails = ({ show }) => {
  const { name, image, summary, _embedded } = show;

  return (
    <div className='show-details'>
      <div
        className='show-details__poster'
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>
      <h1>{name}</h1>
      {parse(summary)}

      {_embedded.cast.length > 0 && <Cast cast={_embedded.cast}></Cast>}

      {/* STYLES */}
      <style jsx>{styles}</style>
    </div>
  );
};
// ::::: SSR :::::
export const getServerSideProps = async ({ query }) => {
  const { showId } = query;
  const response = await axios.get(
    `http://api.tvmaze.com/shows/${showId}?embed=cast`
  );

  return {
    props: {
      show: response.data,
    },
  };
};

export default ShowDetails;
