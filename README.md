# Trabajo Práctico Final
## Integrantes <br>
1- Demian Micael Soruco | micaelsoruco_<br>
2- Federico Omar Farfan | Fede301<br>
3- Ramiro Ignacio Gutiérrez Quival | RamaGuti<br>
4- Sivila Lucas Santiago | santtiago8<br>
5- Juan Manuel Viviano Alancay | AlancayJuan<br>

## Descripción del Proyecto
Este proyecto es un **Panel de Control de Clientes en tiempo real** desarrollado con el objetivo de integrar la totalidad de los conceptos estudiados durante el cuatrimestre.

### Características Clave
* **Autenticación y Estado Global:** Panel protegido mediante React Router DOM. Utiliza **Context API** y **LocalStorage** para administrar y persistir la sesión del Administrador (Nombre y Sector) al recargar la página.
* **Gestión de Clientes (GET /users):** Interfaz gráfica responsiva con un buscador dinámico por apellido o ciudad. Controla visualmente los estados de carga, éxito y error mediante bloques try/catch.
* **Alta de Clientes (POST):** Formulario integrado para dar de alta nuevos usuarios que envía una petición HTTP de tipo POST al servidor y notifica el éxito mostrando el ID asignado por la API.
* **Ficha Detallada y Roles (GET /users/:id):** Ruta dinámica mediante `useParams` que desestructura objetos anidados para mostrar la dirección completa y las credenciales. Aplica una lógica de permisos por contexto: el sector **Soporte** solo visualiza los datos, mientras que **Gerencia** tiene acceso exclusivo para eliminar (DELETE) al cliente.
