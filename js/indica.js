document.addEventListener('DOMContentLoaded', function() {
            const imagenes = document.getElementById('imagenes');
            const totalImagenes = imagenes.children.length;
            const imagenesPorGrupo = 3;
            const totalGrupos = Math.ceil(totalImagenes / imagenesPorGrupo);
            let grupoActual = 0;

            // Crear indicadores
            const indicadoresContainer = document.getElementById('indicadores');
            for (let i = 0; i < totalGrupos; i++) {
                const indicador = document.createElement('div');
                indicador.className = 'indicador' + (i === 0 ? ' activo' : '');
                indicador.addEventListener('click', () => {
                    grupoActual = i;
                    actualizarCarrusel();
                    actualizarIndicadores();
                });
                indicadoresContainer.appendChild(indicador);
            }

            // Función para actualizar el carrusel
            function actualizarCarrusel() {
                const anchoContenedor = imagenes.parentElement.clientWidth;
                const desplazamiento = grupoActual * anchoContenedor;
                imagenes.style.transform = `translateX(-${desplazamiento}px)`;
            }

            // Función para actualizar indicadores
            function actualizarIndicadores() {
                const indicadores = document.querySelectorAll('.indicador');
                indicadores.forEach((ind, index) => {
                    ind.classList.toggle('activo', index === grupoActual);
                });
            }

            // Eventos para los botones
            document.getElementById('next').addEventListener('click', () => {
                grupoActual = (grupoActual + 1) % totalGrupos;
                actualizarCarrusel();
                actualizarIndicadores();
            });

            document.getElementById('prev').addEventListener('click', () => {
                grupoActual = (grupoActual - 1 + totalGrupos) % totalGrupos;
                actualizarCarrusel();
                actualizarIndicadores();
            });

            // Ajuste automático al cambiar tamaño de ventana
            window.addEventListener('resize', actualizarCarrusel);
            
            // Inicializar carrusel
            actualizarCarrusel();
        });