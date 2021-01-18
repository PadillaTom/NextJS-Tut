// Importing EXTERNAL JSX CSS:
import ThumbnailStyles from '../Thumbnail/styles';
import Link from 'next/link';

const Thumbnail = ({
  caption,
  imageUrl = 'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1',
  href = '',
  as = '',
}) => {
  //   ::::: MAIN ::::::
  return (
    <div className='thumbnail'>
      <Link href={href} as={as}>
        <a>
          <img src={imageUrl} alt={caption} className='thumb__image' />
          <h3 className='thumb__caption'>{caption}</h3>
        </a>
      </Link>
      {/* Styles */}
      <style jsx>{ThumbnailStyles}</style>
    </div>
  );
};

export default Thumbnail;
