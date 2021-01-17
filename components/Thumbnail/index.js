// Importing EXTERNAL JSX CSS:
import ThumbnailStyles from '../Thumbnail/styles';

const Thumbnail = ({
  caption,
  imageUrl = 'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1',
}) => {
  // Function to prevent NULL ---> MI MANERA <---
  // No usaremos mi manera, usaremos la del TIPO
  // const imageReal = () => {
  //   if (imageUrl == null) {
  //     return 'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1';
  //   } else {
  //     return imageUrl.medium;
  //   }
  // };

  //   ::::: MAIN ::::::
  return (
    <div className='thumbnail'>
      <img src={imageUrl} alt={caption} className='thumb__image' />
      <h3 className='thumb__caption'>{caption}</h3>
      {/* Styles */}
      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
