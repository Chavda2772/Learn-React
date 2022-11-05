function Card(props) {
  let details = props.profile;

  return (
    <div className='card'>
      <img
        className='img-circle'
        src={details.avatar_url}
        alt='User'
        height={70}
        width={70}
      />
      <div className='details'>
        <h4>{details.login}</h4>
        <h5>{details.name}</h5>
      </div>
    </div>
  );
}

export default Card;
