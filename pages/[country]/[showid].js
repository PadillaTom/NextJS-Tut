// Imports:
import axios from 'axios';
import styles from './styles';

// ::::: MAIN :::::
const ShowDetails = ({ show }) => {
  const { name, image } = show;

  return (
    <div className='show-details'>
      <div
        className='show-details__poster'
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>
      <h1>{name}</h1>
      <style jsx>{styles}</style>
    </div>
  );
};
// ::::: SSR :::::
export const getServerSideProps = async () => {
  const response = await axios.get('http://api.tvmaze.com/shows/1?embed=cast');

  return {
    props: {
      show: response.data,
    },
  };
};

export default ShowDetails;
