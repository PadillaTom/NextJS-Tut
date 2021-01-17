// Importing EXTERNAL JSX CSS:
import ThumbnailStyles from '../Thumbnail/styles';

const Thumbnail = ({ caption, imageUrl }) => {
  // Function to prevent NULL
  const imageReal = () => {
    if (imageUrl == null) {
      return 'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1';
    } else {
      return imageUrl.medium;
    }
  };

  //   ::::: MAIN ::::::
  return (
    <div className='thumbnail'>
      <img src={imageReal()} alt={caption} className='thumb__image' />
      <h3 className='thumb__caption'>{caption}</h3>
      {/* Styles */}
      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
