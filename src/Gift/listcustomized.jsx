import React from 'react';
import Customized from './customized';
import "./listcustomized.css"
  // Assuming Customized component is in the same folder

const ListCustomized = () => {
  // Define the functions that handle Add to Cart and Pay Now actions
  const handleAddToCart = (giftName) => {
    alert(`${giftName} has been added to the cart!`);
  };

  const handlePayNow = (giftName) => {
    alert(`Proceeding to payment for ${giftName}`);
  };

  return (
    <div className="app">
      <h1>Gift Shop</h1>
      <div className="gift-cards-container">
        <Customized
          giftName="Photo with Wooden stand"
          giftPrice="Rs.649"
          giftDetails="A personalized mug with your name!"
          imageUrl="https://printo-s3.dietpixels.net/site/2024/Rubber%20stamp/New-1_1707221588_1711110254.jpeg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Customized Mug')}
          onPayNow={() => handlePayNow('Customized Mug')}
        />
        <Customized
          giftName="Personalized Keychain"
          giftPrice="Rs.348"
          giftDetails="Photo Frames."
          imageUrl="https://printo-s3.dietpixels.net/site/20231218_172853444129_d7215c_Photo-Frame.jpg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
         <Customized
          giftName="Acrylic Photo Prints"
          giftPrice="Rs.383"
          giftDetails="A keychain with your photo."
          imageUrl="https://printo-s3.dietpixels.net/site/20230628_165542122177_8ab0fe_Premium-Acrylic-Desk.jpg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
         <Customized
          giftName="Photo Calendar"
          giftPrice="Rs.295"
          giftDetails="A keychain with your photo."
          imageUrl="https://printo-s3.dietpixels.net/site/2024/Wiro/Wall_1730959892.jpg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
         <Customized
          giftName="Photo Prints"
          giftPrice="Rs.12.39"
          giftDetails="A keychain with your photo."
          imageUrl="https://printo-s3.dietpixels.net/site/20231218_213432121832_821a66_Retro-Photo-Prints.jpg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
         <Customized
          giftName="Photo Books"
          giftPrice="Rs.12.30"
          giftDetails="A keychain with your photo."
          imageUrl="https://printo-s3.dietpixels.net/site/20230626_185207071323_01e323_Photo-Mugs.jpg?quality=70&format=webp&w=1080/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
         <Customized
          giftName="Photo Mugs"
          giftPrice="Rs.543"
          giftDetails="A keychain with your photo."
          imageUrl="https://printo-s3.dietpixels.net/site/20230626_205156851583_2c1d62_Drinkware.jpg?quality=70&format=webp&w=384/300x200"
          onAddToCart={() => handleAddToCart('Personalized Keychain')}
          onPayNow={() => handlePayNow('Personalized Keychain')}
        />
      </div>
    </div>
  );
};

export default ListCustomized;
