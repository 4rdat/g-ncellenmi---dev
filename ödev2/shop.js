document.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products') 
      .then(response => response.json()) 
      .then(products => {
          const container = document.body; 
          products.forEach(product => {
             const box = document.createElement('div');
              box.classList.add('box');
              const img = document.createElement('img');
              img.src = product.image; 
              img.alt = `resim ${product.id}`
              const urunIsimi = document.createElement('p');
              urunIsimi.classList.add('urun-isimi');
              urunIsimi.textContent = product.title;

              const fiyat = document.createElement('p');
              fiyat.classList.add('fiyat');
              fiyat.textContent = `${product.price} TL`;

              const button = document.createElement('button');
              button.classList.add('button');
              button.textContent = 'Sepete Ekle';

              const productDetails = document.createElement('div');
              productDetails.classList.add('product-details');
              const detailsImg = document.createElement('img');
              detailsImg.src = product.image;
              const detailsText = document.createElement('p');
              detailsText.textContent = product.description;

              productDetails.appendChild(detailsImg);
              productDetails.appendChild(detailsText);
              box.appendChild(img);
              box.appendChild(urunIsimi);
              box.appendChild(fiyat);
              box.appendChild(button);
              box.appendChild(productDetails);
              container.appendChild(box);

              button.addEventListener('click', () => {
                  productDetails.classList.toggle('show');
              });
          });
      })
      .catch(error => {
          console.error('API verisi alınırken hata oluştu:', error);
      });
});
