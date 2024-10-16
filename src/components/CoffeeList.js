import React from 'react';
import CoffeeCard from './CoffeeCard';

// Örnek kahve verileri
export const coffeeData = [
  {
    name: 'Pumpkin Spice Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox2mu7-Pumpkin_Spice_Latte-720x720px.jpg',
    preparation:
      'Espresso, Buharda ısıtılmış süt, Pumpkin spice şurubu ve üzerine tarçın, Karanfil ve hindistan cevizi ile süslenmiş krema ile servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Iced Pumpkin Spice Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox44sa-Iced_Pumpkin_Spice_Latte_720x720px.jpg',
    preparation:
      'Buz üzerinde espresso, Soğuk süt, Pumpkin spice şurubu ve kremalı tarçın ile süslenmiş şekilde servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Pumpkin Cream Oat Shaken Espresso',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox5oe0-Pumpkin_Cream_Oat_Shaken_Espresso_720x720px.jpg',
    preparation:
      'Espresso, Yulaf sütü ve pumpkin cream şurubu çalkalanarak hazırlanır. Üzerine balkabağı kreması eklenir ve soğuk servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Pumpkin Cream Cold Brew',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox796d-Pumpkin_Cream_Cold_Brew_720x720px.jpg',
    preparation:
      'Cold brew kahve, Pumpkin cream köpüğü ve balkabağı baharatları ile süslenerek hazırlanır.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Pumpkin Spice Frappuccino',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox8ich-Pumpkin_Spice_Frappuccino_720x720px.jpg',
    preparation:
      'Buz, süt, espresso ve pumpkin spice şurubu karıştırılır, üzerine krema ve tarçın eklenerek servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Pumpkin Spice Cream Frappuccino',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0ox8ich-Pumpkin_Spice_Frappuccino_720x720px.jpg',
    preparation:
      'Espresso yerine sadece süt ve pumpkin spice şurubu kullanılır. Kremalı ve tarçınlı olarak soğuk servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Salted Maple & Caramel Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0oxe962-Salted_Maple_&_Caramel_Latte_720x720px.jpg',
    preparation:
      'Espresso, tuzlu karamel şurubu ve buharda ısıtılmış süt karıştırılarak hazırlanır, üzerine karamel sos eklenir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Iced Salted Maple & Caramel Latte',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/7m0oxh4n6-Iced_Salted_Maple_Caramel_Latte_720x720px.jpg',
    preparation:
      'Soğuk süt, buz, espresso ve tuzlu karamel şurubu karıştırılır, karamel sos ile süslenerek soğuk servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Frozen Berry Hibiscus Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw8qik-Frozen_Very_Berry_Hibiscus_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buzlu bir bardakta hibiscus çayı, böğürtlen ve diğer meyvelerle birlikte hazırlanır, ferahlatıcı bir soğuk içecektir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Frozen Orange Mango Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw21xa-Frozen_Orange_Mango_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buz, portakal ve mango karışımı meyve suyu ile karıştırılarak soğuk servis edilir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Frozen Mango Dragon Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiwc4jv-Frozen_Mango_Dragonfruit_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Buz, mango suyu ve dragon meyvesi ile karıştırılır. Üzerine dragon meyvesi parçaları eklenir.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
  {
    name: 'Frozen Cool Lime Refresha',
    image:
      'https://d2eiylesx4iyph.cloudfront.net/files/8lwiw26l3-Frozen_Cool_Lime_Starbucks_Refresha_Drink_720x720px.jpg',
    preparation:
      'Limon suyu, buz ve lime dilimleri karıştırılarak ferahlatıcı bir içecek olarak sunulur.',
    ingredients: [
      '2 Shots Espresso',
      '1 Cup Oat Milk',
      '2 Tbsp Pumpkin Cream',
      'Ice',
    ],
    instructions: [
      'Add espresso, oat milk, and pumpkin cream to a shaker.',
      'Shake well with ice until creamy.',
      'Strain into a glass over ice and enjoy!',
    ],
  },
];

const CoffeeList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-8 bg-gray-100">
      {coffeeData.map((coffee, index) => (
        <CoffeeCard key={index} name={coffee.name} image={coffee.image} />
      ))}
    </div>
  );
};

export default CoffeeList;
