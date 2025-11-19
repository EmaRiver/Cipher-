// ========== DATOS DE LOS PRODUCTOS ==========
const products = {
    1: {
        title: "Clue Escape: El Hotel de Medianoche",
        duration: "5:46:49",
        price: "$368.99",
        image: "https://m.media-amazon.com/images/I/81mdljhubAL._AC_SL1500_.jpg"
    },
    2: {
        title: "CLUE: Scooby-Doo Board Game",
        duration: "56/9:36",
        price: "$670.00",
        image: "https://i5.walmartimages.com/asr/3106f075-0754-447e-92e7-6582856a878d.d51d23307921dc5deaa70cfe40ef8a78.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF://m.media-amazon.com/images/G/33/apparel/rcxgs/tile._CB483369929_.gif"
    },
    3: {
        title: "CLUE: The World'S Fair Juego de Mesa",
        duration: "5/9:36",
        price: "$315.04",
        image: "https://m.media-amazon.com/images/I/81WJLXblAKL._AC_UF350,350_QL80_.jpg"
    },
    4: {
        title: "ESCAPE ROBBERY AT THE MUSEUM",
        duration: "8:40:30",
        price: "$750.00",
        image: "https://m.media-amazon.com/images/I/81atmkXZcuL.jpg"
    },
    5: {
        title: "Escape Der Club der Magier Escape Room und Mystery ",
        duration: "8/9:30",
        price: "$783.39",
        image: "https://i5.walmartimages.com/asr/27919dc6-02c7-426d-bc5d-05137faf94a1.b5d89213cd1dd246071b0053e35a0d37.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    6: {
        title: "Clue orginal",
        duration: "9:16:07",
        price: "$510.07",
        image: "https://m.media-amazon.com/images/I/51vXqwxNpSL._AC_.jpg"
    }
};

// ========== ELEMENTOS DEL DOM ==========
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDuration = document.getElementById('modalDuration');
const modalPrice = document.getElementById('modalPrice');

// ========== EVENTOS PARA ABRIR MODAL ==========
document.querySelectorAll('.product-card, .buy-btn').forEach(element => {
    element.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn')) {
            e.stopPropagation();
        }
        
        const productId = this.closest('.product-card').getAttribute('data-product-id');
        const product = products[productId];
        
        if (product) {
            modalTitle.textContent = product.title;
            modalDuration.textContent = product.duration;
            modalPrice.textContent = product.price;
            
            // MOSTRAR IMAGEN EN EL MODAL
            modalImage.innerHTML = ''; // Limpiar contenido anterior
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.borderRadius = '8px';
            img.style.maxHeight = '300px';
            img.style.objectFit = 'cover';
            modalImage.appendChild(img);
            
            modal.style.display = 'flex';
        }
    });
});

// ========== FUNCIÓN PARA CERRAR MODAL ==========
function closeModalFunc() {
    modal.style.display = 'none';
}

// ========== EVENTOS PARA CERRAR MODAL ==========
closeModal.addEventListener('click', closeModalFunc);
cancelBtn.addEventListener('click', closeModalFunc);

// ========== CONFIRMAR COMPRA ==========
confirmBtn.addEventListener('click', function() {
    alert('¡Compra realizada con éxito! Gracias por tu compra.');
    closeModalFunc();
});

// ========== CERRAR MODAL AL HACER CLIC FUERA ==========
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModalFunc();
    }
});