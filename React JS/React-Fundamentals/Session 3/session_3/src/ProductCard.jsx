// import React from 'react'

// function ProductCard({ productName, price, imageUrl }) {

//     return (
//         <div>
//             <div style={styles.card}>
//                 <img style={styles.image} src={imageUrl} alt={productName} />
//                 <h3 style={styles.title}>{productName}</h3>
//                 <p style={styles.price}>₹{price.toFixed(2)}</p>
//             </div>
//         </div>
//     )
// }
// const styles = {
//     card: {
//         border: '1px solid #e0e0e0',
//         borderRadius: '8px',
//         padding: '16px',
//         maxWidth: '250px',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: '#ffffff',
//     },
//     image: {
//         width: '100%',
//         height: 'auto',
//         marginBottom: '16px',
//     },
//     title: {
//         fontSize: '1.2rem',
//         margin: '0 0 8px 0',
//         color: '#333333',
//     },
//     price: {
//         fontSize: '1rem',
//         fontWeight: 'bold',
//         color: '#2a9d8f',
//         margin: '0',
//     },
// };

// export default ProductCard
import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ productName, price }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{productName}</h3>
      <p style={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '250px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '1.2rem',
    margin: '0 0 8px 0',
    color: '#333333',
  },
  price: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2a9d8f',
    margin: '0',
  },
};

export default ProductCard;