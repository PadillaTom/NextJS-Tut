// Imports:
import styles from '../../styles/CastStyles';
import Thumbnail from '../Thumbnail';

const Cast = ({ cast }) => {
  // RENDER LIST:
  const renderCastList = () => {
    return cast.map((item, index) => {
      const { image, name } = item.person;
      return (
        <li key={index}>
          <Thumbnail
            imageUrl={(image && image.medium) || undefined}
            caption={name}
            small
          ></Thumbnail>
        </li>
      );
    });
  };
  return (
    <div className='cast'>
      <h1>Cast</h1>
      <ul className='cast__list'>{renderCastList()}</ul>
      {/* STYLES */}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Cast;
