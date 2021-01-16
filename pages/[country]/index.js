// API:
//http://api.tvmaze.com/schedule?country=US&date=2014-12-01

// Imports
import axios from 'axios';

// :::::Main:::::
const CountryHome = ({ shows }) => {
  // Function to RenderShows:
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;
      return <li key={index}>{show.name}</li>;
    });
  };

  return <ul className='tvshows'>{renderShows()}</ul>;
};

// ::::::::::::SSR::::::::::::::
CountryHome.getInitialProps = async (context) => {
  const country = context.query.country || 'us';

  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );
  return {
    shows: response.data,
  };
};

export default CountryHome;