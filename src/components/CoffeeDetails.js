import { useParams } from 'react-router-dom';
import { coffeeData } from './CoffeeList'; // coffeeData'yı buraya import etmelisin

const CoffeeDetails = () => {
  const { name } = useParams();

  // Seçilen kahveyi bul
  const coffee = coffeeData.find((coffee) => coffee.name === name);

  // Eğer kahve bulunamazsa bir hata mesajı göster
  if (!coffee) {
    return <p>Kahve bulunamadı!</p>;
  }

  return (
    <div className="flex flex-col items-center py-8 bg-gray-500">
      <h1 className="text-4xl font-bold text-white mb-4">{coffee.name}</h1>
      <img src={coffee.image} alt={coffee.name} className="w-64 h-64 mb-4" />

      <div className="flex items-start justify-between w-full max-w-3xl ">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Malzemeler:
          </h2>
          <ul className="text-lg text-white mb-4">
            {coffee.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                • {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center mx-4">
          <span className="border-l-2 pl-20 border-gray-300 h-40"></span>
        </div>

        <div className="flex-1 text-white">
          <h2 className="text-2xl font-semibold mb-2">Talimatlar:</h2>
          <ol className="text-lg  mb-4">
            {coffee.instructions.map((instruction, index) => (
              <li key={index} className="mb-1">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
