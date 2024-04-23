export const formatePrice = (price) => { 
    const roundedPrice = Math.round(price);
    const priceFormated = '$' + roundedPrice.toLocaleString('es-AR');
    return priceFormated;
  }
  