import React from 'react';

const styles = {
  search: {
    width: '100%',
    padding: 8,
    fontSize: 14,
    marginBottom: 10,
    boxSizing: 'border-box',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  card: {
    display: 'flex',
    gap: 10,
    padding: 10,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: 5,
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  cardHover: {
    backgroundColor: '#eee',
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: 4,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const ProductList = ({ products, search, setSearch, onClick }) => {
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        style={styles.search}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />
      <div style={styles.cardList}>
        {filtered.map((product) => (
          <div
            key={product.id}
            style={styles.card}
            onClick={() => onClick(product)}
            onMouseOver={(e) => e.currentTarget.style.background = '#eee'}
            onMouseOut={(e) => e.currentTarget.style.background = '#fff'}
          >
            <img src={product.thumbnail} alt={product.title} style={styles.image} />
            <div style={styles.info}>
              <strong>{product.title}</strong>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
