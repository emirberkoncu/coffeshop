import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoffeeList from './components/CoffeeList';
import CoffeeDetails from './components/CoffeeDetails';

const coffeeData = [
  {
    name: 'Pumpkin Spice Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox2mu7-Pumpkin_Spice_Latte-720x720px.jpg',
    preparation:
      'Espresso, buharda ısıtılmış süt, pumpkin spice şurubu ve üzerine tarçın, karanfil ve hindistan cevizi ile süslenmiş krema ile servis edilir.',
  },
  {
    name: 'Iced Pumpkin Spice Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox44sa-Iced_Pumpkin_Spice_Latte_720x720px.jpg',
    preparation:
      'Buz üzerinde espresso, soğuk süt, pumpkin spice şurubu ve kremalı tarçın ile süslenmiş şekilde servis edilir.',
  },
  {
    name: 'Pumpkin Cream Oat Shaken Espresso',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox5oe0-Pumpkin_Cream_Oat_Shaken_Espresso_720x720px.jpg',
    preparation:
      'Espresso, yulaf sütü ve pumpkin cream şurubu çalkalanarak hazırlanır. Üzerine balkabağı kreması eklenir ve soğuk servis edilir.',
  },
  {
    name: 'Pumpkin Cream Cold Brew',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox796d-Pumpkin_Cream_Cold_Brew_720x720px.jpg',
    preparation:
      'Cold brew kahve, pumpkin cream köpüğü ve balkabağı baharatları ile süslenerek hazırlanır.',
  },
  {
    name: 'Pumpkin Spice Frappuccino',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox8ich-Pumpkin_Spice_Frappuccino_720x720px.jpg',
    preparation:
      'Buz, süt, espresso ve pumpkin spice şurubu karıştırılır, üzerine krema ve tarçın eklenerek servis edilir.',
  },
  {
    name: 'Pumpkin Spice Cream Frappuccino',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox8ich-Pumpkin_Spice_Frappuccino_720x720px.jpg',
    preparation:
      'Espresso yerine sadece süt ve pumpkin spice şurubu kullanılır. Kremalı ve tarçınlı olarak soğuk servis edilir.',
  },
  {
    name: 'Salted Maple & Caramel Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0oxe962-Salted_Maple_&_Caramel_Latte_720x720px.jpg',
    preparation:
      'Espresso, tuzlu karamel şurubu ve buharda ısıtılmış süt karıştırılarak hazırlanır, üzerine karamel sos eklenir.',
  },
  {
    name: 'Iced Salted Maple & Caramel Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0oxh4n6-Iced_Salted_Maple_Caramel_Latte_720x720px.jpg',
    preparation:
      'Soğuk süt, buz, espresso ve tuzlu karamel şurubu karıştırılır, karamel sos ile süslenerek soğuk servis edilir.',
  },
  {
    name: 'Frozen Berry Hibiscus Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw8qik-Frozen_Very_Berry_Hibiscus_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buzlu bir bardakta hibiscus çayı, böğürtlen ve diğer meyvelerle birlikte hazırlanır, ferahlatıcı bir soğuk içecektir.',
  },
  {
    name: 'Frozen Orange Mango Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw21xa-Frozen_Orange_Mango_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buz, portakal ve mango karışımı meyve suyu ile karıştırılarak soğuk servis edilir.',
  },
  {
    name: 'Frozen Mango Dragon Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiwc4jv-Frozen_Mango_Dragonfruit_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buz, mango suyu ve dragon meyvesi ile karıştırılır. Üzerine dragon meyvesi parçaları eklenir.',
  },
  {
    name: 'Frozen Cool Lime Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw26l3-Frozen_Cool_Lime_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Limon suyu, buz ve lime dilimleri karıştırılarak ferahlatıcı bir içecek olarak sunulur.',
  },
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">Coffee Menu</h1>
          <p className="text-lg text-gray-600 mt-2">
            Discover our delicious coffee selections
          </p>
        </header>

        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<CoffeeList />} />
            <Route path="/coffee/:name" element={<CoffeeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
