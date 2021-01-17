// Imports SASS:
import styles from './styles.module.scss';

const ThumbnailSASS = ({ caption, imageUrl }) => {
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
      <img src={imageReal()} alt={caption} className={styles.thumb__image} />
      <h3 className={styles.thumb__caption}>{caption}</h3>
    </div>
  );
};

export default ThumbnailSASS;
