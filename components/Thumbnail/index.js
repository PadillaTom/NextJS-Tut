// Importing EXTERNAL JSX CSS:
// import styles from '../../styles/ThumbnailStyles';
import Link from 'next/link';

const Thumbnail = ({
  caption,
  imageUrl = 'https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1',
  href = '',
  as = '',
  small = false,
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
      <style jsx>
        {`
          .thumb__image {
            width: ${small ? '100px' : '100%'};
            height: ${small && '10rem'};
            object-fit: cover;
          }
          .thumb__caption {
            text-align: center;
            margin-top: 0.7rem;
          }
        `}
      </style>
    </div>
  );
};

export default Thumbnail;
