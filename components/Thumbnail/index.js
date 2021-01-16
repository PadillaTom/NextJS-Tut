const Thumbnail = ({ caption, imageUrl }) => {
  // Function to prevent NULL
  const imageReal = () => {
    if (imageUrl == null) {
      return (
        <img
          src='https://i2.wp.com/www.spainonafork.com/wp-content/uploads/2019/04/popcornHOR-11.png?fit=750%2C750&ssl=1'
          alt='NoImgFound'
          style={{ width: 210, height: 295, objectFit: 'cover' }}
          className='thumb__image'
        ></img>
      );
    } else {
      return (
        <img src={imageUrl.medium} alt={caption} className='thumb__image'></img>
      );
    }
  };

  //   ::::: MAIN ::::::
  return (
    <div className='thumbnail'>
      {imageReal()}
      <h3 className='thumb__caption'>{caption}</h3>
    </div>
  );
};

export default Thumbnail;
