// Imports --->
import axios from 'axios';
// Components --->
import styles from '../../styles/PagesStyles';
import Thumbnail from '../../components/Thumbnail';

// :::::Main:::::
const CountryHome = ({ shows, country }) => {
  // Function to RenderShows:
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;

      return (
        <li key={index}>
          <Thumbnail
            caption={show.name}
            imageUrl={(show.image && show.image.medium) || undefined}
            href='/[country]/[showId]'
            as={`/${country}/${show.id}`}
          ></Thumbnail>
        </li>
      );
    });
  };

  return (
    <ul className='tvshows-grid'>
      {renderShows()}
      <style jsx>{styles}</style>
    </ul>
  );
};

// ::::::::::::SSR::::::::::::::
export const getServerSideProps = async (context) => {
  const country = context.query.country || 'us';

  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );
  return {
    props: {
      shows: response.data,
      country,
    },
  };
};

export default CountryHome;

// API:
//http://api.tvmaze.com/schedule?country=US&date=2014-12-01
