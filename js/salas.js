 document.addEventListener('DOMContentLoaded', function() {
            const roomContainers = document.querySelectorAll('.room-container');
            const cuartos = document.querySelectorAll('.cuarto');
            const closeBtns = document.querySelectorAll('.close-btn');
            const bookBtns = document.querySelectorAll('.book-btn');
            const popup = document.getElementById('popup');
            const closePopup = document.getElementById('close');
            
            // Abrir sala al hacer clic en la imagen
            cuartos.forEach(cuarto => {
                cuarto.addEventListener('click', function(e) {
                    // No hacer nada si se hace clic en el botón de cerrar
                    if (e.target.classList.contains('close-btn')) return;
                    
                    const container = this.parentElement;
                    
                    // Cerrar todas las demás salas
                    roomContainers.forEach(otherContainer => {
                        if (otherContainer !== container) {
                            otherContainer.classList.remove('active');
                        }
                    });
                    
                    // Abrir la sala actual
                    container.classList.add('active');
                });
            });
            
            // Cerrar sala con el botón X
            closeBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    this.closest('.room-container').classList.remove('active');
                });
            });
            
            // Abrir popup de reserva
            bookBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    popup.classList.add('active');
                });
            });
            
            // Cerrar popup
            closePopup.addEventListener('click', function() {
                popup.classList.remove('active');
            });
            
            // Cerrar al hacer clic fuera de cualquier sala
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.room-container')) {
                    roomContainers.forEach(container => {
                        container.classList.remove('active');
                    });
                }
                
                // Cerrar popup al hacer clic fuera
                if (e.target === popup) {
                    popup.classList.remove('active');
                }
            });
            
            // Manejar envío del formulario
            document.getElementById('formulario').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Reserva realizada con éxito! Te contactaremos pronto.');
                this.reset();
                popup.classList.remove('active');
            });
        });