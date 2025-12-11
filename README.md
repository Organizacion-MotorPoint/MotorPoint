# 🚗🏍️🔧 MotorPoint - Aplicativo web de Repuestos y Accesorios para Autos y Motos

## 📖 Descripción del Proyecto
**Descripción General**  
MotorPoint es una aplicación web diseñada para facilitar el acceso a repuestos y accesorios de **autos y motos**.  
El objetivo principal es ofrecer un catálogo digital de productos, organizado y accesible, que permita a los usuarios encontrar de manera rápida lo que necesitan y a los administradores mantener la información actualizada.  

El sistema considera dos roles principales:  

**Usuario:**  
- Navegar el catálogo de productos.  
- Buscar productos por nombre o categoría.  
- Visualizar información detallada (nombre, descripción, precio e imagen).  
- Agregar o quitar productos de un carrito de compras.  
- Confirmar el pedido a través de una solicitud de cotización.  

**Administrador:**  
- Gestión de productos (crear, editar, eliminar y listar).  
- Gestión de categorías de productos.  
- Administración de usuarios registrados.  
- Revisión de solicitudes de cotización generadas por los clientes.  
- Generación de reportes básicos sobre el uso del sistema.

---
## 💻Tecnologías Utilizadas
- **Backend:**
  * Spring Boot
  * Maven:
     * Spring Web → Para construir APIs REST
     * Spring Security → Para autenticación y autorización
     * Spring Data JPA → Para acceso a base de datos con Hibernate
     * MySQL Driver → Para conectarse a la base de datos MySQL
     * Validation → Para validar datos de entrada
     * Spring Boot DevTools → Para recarga automática en desarrollo
     * Lombok → Para evitar escribir código repetitivo
- **Frontend:**
   * React
   * Bootstrap 
- **Base de datos:** MySQL  
- **Seguridad:** Spring Security + JWT (roles y autenticación)   
- **Control de versiones:** Git + GitHub

---
## 🔌Instalación y Ejecución
A continuación se muestran los pasos para instalar y ejecutar el proyecto de forma local, con las mismas acciones realizadas durante las pruebas. .  

### **1. Requisitos Previos**
Antes de iniciar, asegúrate de tener instalado:
- Git → para clonar el repositorio.
- Java 17+ y Maven → para el backend (Spring Boot).
- Node.js 16+ y npm → para el frontend (React).
- MySQL Server funcionando en tu máquina.
- Opcional el Postman para probar APIs.
  
### **2. Inicializar Git en el equipo**
En la carpeta destinada al proyecto, se preparó el entorno de Git ejecutando:
```bash
git init
```
<img width="597" height="95" alt="image" src="https://github.com/user-attachments/assets/bbb82e4a-d228-401a-afb7-0d6acb79a8fd" />

### **3. Clonar el repositorio**
Luego, se descargó el proyecto desde GitHub dentro de la carpeta inicializada:
```bash
git clone https://github.com/usuario/motorpoint.git
cd motorpoint
```
<img width="771" height="260" alt="image" src="https://github.com/user-attachments/assets/90d4a4a3-17e0-4a28-98e3-d54818361464" />

### **4. Configuración del Backend**
- Crear una base de datos en MySQL, por ejemplo:
```bash
CREATE DATABASE motorpoint_db;
```

- Editar el archivo `backend/src/main/resources/application.properties` con tus credenciales:
```bash
spring.datasource.url=jdbc:mysql://localhost:8080/motorpoint_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_password
```

- Iniciar el backend: 
```bash
   cd backend
   mvn spring-boot:run
 ```

### **5. Configuración del Frontend**
- Instalar dependencias:
```bash
cd frontend
npm install
```

- Iniciar el frontend:
```bash
npm start
```

### **6. Pruebas locales con Docker Compose**
- Requisitos: Docker y Docker Compose.
- Crea tus archivos de entorno (no se suben):
   - Copia [backend/.env.example](backend/.env.example) a `backend/.env` y ajusta credenciales (usa un usuario no root y contraseña).
   - Copia [frontend/.env.example](frontend/.env.example) a `frontend/.env` y ajusta `REACT_APP_API_URL` si es necesario.
- Levantar backend + base de datos:
```bash
docker-compose --env-file backend/.env up -d backend mysql
```
- Levantar frontend:
```bash
docker-compose --env-file backend/.env up -d frontend
```
- Ver contenedores:
```bash
docker ps
```
- Detener y limpiar:
```bash
docker-compose down -v
```
Notas:
- `DB_USERNAME/DB_PASSWORD` no deben estar vacíos; evita usar root para la app.
- El backend queda en http://localhost:8080 y el frontend en http://localhost:3000.

#### Ver la base de datos
- Desde el contenedor:
```bash
docker exec -it motorpoint-db mysql -u $DB_USERNAME -p$DB_PASSWORD $DB_NAME
```
- Con cliente local (MySQL Workbench/CLI):
   - Host: 127.0.0.1
   - Puerto: 3306
   - Usuario: el definido en backend/.env
   - Password: la definida en backend/.env
   - Base: la definida en backend/.env
   (En Workbench crea una conexión con esos datos.)

---
## 📋 Roles
| *Nombre*          | *Rol*                                     | *Funciones principales* |
|----------------------|---------------------------------------------|----------------------------|
| *Ashlee Maldonado* | Full Stack – Líder y Frontend | - Creación de pantallas y componentes.<br>- Apoyo en lógica interna del sistema.<br>- Elaboración y organización de la documentación.<br>- Coordinación del equipo y decisiones.<br>- Testing y validación del sistema. |
| *Angely Corahua*   | Full Stack  – Frontend e Interfaces | - Diseño y organización de interfaces.<br>- Implementación visual y estilos.<br>- Manejo de datos mostrados al usuario.<br>- Validación de formularios y experiencia de uso.<br>- Testing y pruebas de usabilidad. |
| *Bruno Guerra*     | Full Stack  – Backend e Infraestructura | - Desarrollo de procesos y reglas internas.<br>- Configuración de seguridad y accesos.<br>- Administración del repositorio y control de versiones.<br>- Despliegue y mantenimiento del sistema.<br>- Testing de calidad y rendimiento. |

---
## 🌱 Flujo de trabajo con Git

### **1. Ramas utilizadas**
- **main** → Rama estable, lista para producción.  
- **develop-nombre** → Rama de desarrollo.  
- **feature/nombre** → Nuevas funcionalidades.  
- **fix/nombre** → Correcciones de errores.  

#### Ejemplo
```bash
git checkout -b feature/catalogo-productos
```
<img width="955" height="222" alt="image" src="https://github.com/user-attachments/assets/b3b1e97e-16f9-467f-be56-d70f5e9a3124" />

#### Ejemplo 
```bash
git checkout -b fix/readme-conflict
```
<img width="600" height="58" alt="image" src="https://github.com/user-attachments/assets/c36a26de-89e0-4f0a-a172-1e07fecf60df" />


### **2. Commits**
- Commits atómicos y descriptivos.
```bash
git commit -m "feat: crear página Login en React"
git commit -m "fix: resolver conflicto en README.md"
```

### **3. Pull Request (PR) / Merge Request (MR)**

- Se generó una Pull Request desde **fix/readme-conflict** hacia **main**.

- Descripción clara del cambio.

- Checklist de revisión.

- Revisión y aprobación antes de hacer merge.

<img width="1600" height="688" alt="image" src="https://github.com/user-attachments/assets/fbe2a743-d9b7-48b5-88f4-7ac95d34de71" />

<img width="1286" height="741" alt="image" src="https://github.com/user-attachments/assets/0431419e-71aa-444d-9cae-c37e5433bc51" />

### **4. Resolución de Conflictos Ejemplo:**

Al intentar actualizar la rama **main** con los cambios remotos, se generó un conflicto en el archivo:

`README.md`

```diff
<<<<<<< HEAD
# MotorPoint - Sistema de Repuestos y Accesorios para Autos y Motos 
=======
# 🚗🏍️🔧 MotorPoint - Aplicativo web de Repuestos y Accesorios para Autos y Motos
>>>>>>> origin/main
```
✅ Solución: Se unificaron los cambios y se mantuvo la versión más completa y descriptiva:
```diff
# 🚗🏍️🔧 MotorPoint - Aplicativo web de Repuestos y Accesorios para Autos y Motos  

## 📖 Descripción del Proyecto
**Descripción General**  
MotorPoint es una aplicación web diseñada para facilitar el acceso a repuestos y accesorios de **autos y motos**.  
El objetivo principal es ofrecer un catálogo digital de productos, organizado y accesible, que permita a los usuarios encontrar de manera rápida lo que necesitan y a los administradores mantener la información actualizada.  

El sistema considera dos roles principales: **Usuario** y **Administrador** 🚀
```
### **5. Historial de commits (puntos de control)**
### Ejemplo de salida:
```bash
git log
```
### Muestra:
<img width="1278" height="1013" alt="image" src="https://github.com/user-attachments/assets/37bda904-30ba-4d1e-9e5d-9c09ec98c747" />

<img width="1304" height="953" alt="image" src="https://github.com/user-attachments/assets/e57c23d2-9f6e-44e4-8c8d-eecafdb33e61" />

### **6. Historial de cabeceras**
```bash
git reflog
```
<img width="1570" height="547" alt="image" src="https://github.com/user-attachments/assets/fed76798-5ddb-403a-b6cd-a28ea3dcadc8" />

### 🧩 Estructura de backend
<img width="364" height="667" alt="image" src="https://github.com/user-attachments/assets/b4ca1eb1-6992-4a81-8325-0176e30f8749" />

### 🧩 Estructura del Frontend
<img width="359" height="722" alt="image" src="https://github.com/user-attachments/assets/88731c9d-dd78-47d7-82e5-808b78fc5053" />

---

### **7. Organización**
- El owner del proyecto creó la organización llamada **Organizacion-MotorPoint**.
  
<img width="305" height="608" alt="image" src="https://github.com/user-attachments/assets/be3cb14a-3c16-48fc-898e-6a8f09afacc6" /><br><br>

- Los integrantes del equipo fueron invitados a la organización para colaborar en el repositorio.
  
<img width="468" height="270" alt="image" src="https://github.com/user-attachments/assets/a9d7d2bd-2f0d-4df6-b399-c57bb8f817f3" /><br><br>

- Organización creada.
  
<img width="615" height="509" alt="image" src="https://github.com/user-attachments/assets/087add3f-be67-4489-a227-5587f0b65d76" /><br><br>

- El repositorio MotorPoint fue transferido desde el perfil personal del owner a la organización
  
<img width="417" height="503" alt="image" src="https://github.com/user-attachments/assets/7c8a2209-d081-426a-9236-e89aa917db37" /><br><br>

- Una vez transferido, se actualizó la URL del repositorio remoto en el entorno local para apuntar a la nueva ubicación en la organización.
  
<img width="1115" height="75" alt="image" src="https://github.com/user-attachments/assets/a1c2656e-61aa-4f00-9851-22642a6bd84f" /><br><br>
<img width="1103" height="128" alt="image" src="https://github.com/user-attachments/assets/2e99ac84-5a29-4f2b-8f2c-f4d2d42bca9d" />

---

### **8. Milestone**
- Creamos 3 milestones, cada uno con una breve descripción.
  
<img width="932" height="295" alt="image" src="https://github.com/user-attachments/assets/882f7be3-3a9a-42ff-a5e1-2cbdf0595c7f" /><br><br>

- Cada milestone cuenta con sus issues correspondientes junto con sus asignaciones y etiquetas.
  
<img width="696" height="483" alt="image" src="https://github.com/user-attachments/assets/c4764e93-34e8-4b2d-816f-1b1f22f2c27e" /><br><br>
<img width="675" height="286" alt="image" src="https://github.com/user-attachments/assets/590024ec-c4ff-4f30-b588-f7d8542879e7" />
<img width="699" height="222" alt="image" src="https://github.com/user-attachments/assets/c7a2b792-ddf3-4970-8abc-7bdf0e5e1c8a" />

---

### **9. Tablero del proyecto**

<img width="1190" height="576" alt="image" src="https://github.com/user-attachments/assets/807220f0-8cce-4eb5-8fe8-ccf13ecef2c6" /><br><br>

---

### **10. Ramas revisión**
- Branch rules:
  
<img width="341" height="606" alt="image" src="https://github.com/user-attachments/assets/9cd91c91-71fc-46b6-888e-97e458136dc4" /><br><br>

- Ramas protegidas:

<img width="918" height="209" alt="image" src="https://github.com/user-attachments/assets/11a16615-e70e-49f0-8064-2a2c31dbf238" /><br><br>

---

### **11. Fork**
- Opción para crear el fork

<img width="796" height="284" alt="image" src="https://github.com/user-attachments/assets/71ea7a8f-a155-490c-bfcb-af1f3ebe64b9" /><br><br>

- Creación del Fork llamado MotorPoint_Fork

<img width="796" height="597" alt="image" src="https://github.com/user-attachments/assets/ddb547a1-7425-458a-8770-0cbbe1d8412c" /><br><br>

- Paso 1: Clonar el fork en el bash

<img width="1005" height="310" alt="image" src="https://github.com/user-attachments/assets/e342940c-125a-4024-b80c-70b94c2acfcf" /><br><br>

- Visualización del fork creado

<img width="665" height="398" alt="image" src="https://github.com/user-attachments/assets/f56f6625-6a65-4ca1-a32b-5944306d6cb2" /><br><br>

- Paso 2: Colocar comando para verificar

<img width="782" height="102" alt="image" src="https://github.com/user-attachments/assets/cf7c77c0-57a1-4556-80aa-baf362d2d540" /><br><br>

- Paso 3: Añadir un upstream para traer las ramas y más de la organización

<img width="902" height="196" alt="image" src="https://github.com/user-attachments/assets/4691bb23-4f63-4d32-b824-c8737fe1930b" /><br><br>

- Paso 4: Hacer fetch upstream para verificar las ramas traídas

<img width="810" height="443" alt="image" src="https://github.com/user-attachments/assets/ec1d262a-1ee2-40a0-91dd-bb945e86bf50" /><br><br>

- Último paso crear mi rama develop dentro del fork para luego crear más ramas según las issues

<img width="813" height="518" alt="image" src="https://github.com/user-attachments/assets/7232648b-2ca2-44b3-9c03-032b95c7c6ff" /><br><br>



### **12. Despliegue**

- Desplegamos una base de datos.

<img width="431" height="270" alt="image" src="https://github.com/user-attachments/assets/85127cdc-04ac-4f13-869b-c245d38bd567" />

- Esperamos a que termine de cargar el deploy.
  
<img width="830" height="402" alt="image" src="https://github.com/user-attachments/assets/cc464691-bf95-4041-bcc3-cedf7b0c8a3b" />

- Copiamos las variables necesarias para nuestro backend, como: URL, CONTRASEÑA , USUARIO.

<img width="657" height="314" alt="image" src="https://github.com/user-attachments/assets/c4fc2c02-0130-4bbb-9126-8a824c749dc5" />

- Traemos el contenido del repositorio.
  
<img width="683" height="322" alt="image" src="https://github.com/user-attachments/assets/4b49b523-1d3c-4925-8ea8-f12f97aee4d4" />

  
- Como nuestro repositorio contiene tanto frontend y backend elegimos la ruta para poder desplegar el backend con “/backend”.
  
<img width="887" height="421" alt="image" src="https://github.com/user-attachments/assets/4af73a6e-3d3e-4feb-9679-ae768abe3244" />

  
- Una vez terminado, colocamos las variables para que se pueda iniciar el deploy con el backend.
  
<img width="904" height="375" alt="image" src="https://github.com/user-attachments/assets/47a9c5c6-0260-427d-b54d-5f9ea3340faf" />

  
- Con eso estaría conectado el backend con la base de datos.

<img width="855" height="394" alt="image" src="https://github.com/user-attachments/assets/0e053b77-633e-4175-824e-a5bd136988b1" />

  
- Para poder realizar consultas le generamos un dominio.

<img width="798" height="631" alt="image" src="https://github.com/user-attachments/assets/3082e3e3-299c-4d65-a081-6c07152c3bae" />

  
- Repetimos el paso anterior para seguir con el frontend.
  
<img width="688" height="327" alt="image" src="https://github.com/user-attachments/assets/8809e013-ee24-4d1c-abcd-6875b305dcd4" />

<img width="1120" height="470" alt="image" src="https://github.com/user-attachments/assets/30278123-3295-47fb-8b6d-01fad70ddec6" />

  
- Colocamos los comandos necesarios para instalar las dependencias y cargar el build.

<img width="828" height="159" alt="image" src="https://github.com/user-attachments/assets/fac6ef0d-299e-4d7d-a156-3c278d4967f2" />

  
- Comando para iniciar el proyecto:

<img width="849" height="302" alt="image" src="https://github.com/user-attachments/assets/e0af1cdd-f5da-4998-88b1-9271c7b4401a" />

  
- Comando para hacerlo público:
  
<img width="773" height="332" alt="image" src="https://github.com/user-attachments/assets/7f79beb1-86c9-4963-b362-19d716b35d17" />


### **13. Despliegue con la ejecución de los contenedores**

