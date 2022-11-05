import Card from './Card';

function CardList(props) {
  return (
    <>
      {props.userDetails.map((card) => {
        return <Card key={card.id} profile={card} />;
      })}
    </>
  );
}

export default CardList;
