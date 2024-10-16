import { Link } from 'react-router-dom';

const CoffeeCard = ({ name, image }) => {
  return (
    <Link to={`/coffee/${name}`}>
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer">
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
        <h2 className="text-lg font-medium text-center">{name}</h2>
      </div>
    </Link>
  );
};

export default CoffeeCard;
