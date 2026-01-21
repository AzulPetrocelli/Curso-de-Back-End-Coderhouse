# 🚀 Entrega N° 1: Servidor de Gestión de E-commerce

## 📝 Descripción General

Desarrollar un servidor robusto basado en **Node.js** y **Express** que gestione los endpoints y servicios necesarios para la administración de productos y carritos de compra de una API.

---

## ⚙️ Requisitos del Servidor

- **Tecnología:** Node.js + Express.
- **Puerto:** 8080.
- **Estructura:** Implementación de rutas mediante `express.Router`.
- **Prefijos de Ruta:** `/api/products` y `/api/carts`.

---

## 📦 Gestión de Productos (`/api/products/`)

| Método     | Endpoint | Descripción                                            |
| :--------- | :------- | :----------------------------------------------------- |
| **GET**    | `/`      | Lista todos los productos de la base de datos.         |
| **GET**    | `/:pid`  | Obtiene un producto específico por su ID.              |
| **POST**   | `/`      | Agrega un nuevo producto (ID autogenerado).            |
| **PUT**    | `/:pid`  | Actualiza campos de un producto (sin modificar el ID). |
| **DELETE** | `/:pid`  | Elimina el producto indicado.                          |

### 🛠️ Estructura del Producto

```json
{
	"id": "Number/String (Autogenerado)",
	"title": "String",
	"description": "String",
	"code": "String",
	"price": "Number",
	"status": "Boolean",
	"stock": "Number",
	"category": "String",
	"thumbnails": ["Array de Strings"]
}
```

---

## 🛒 Gestión de Carritos (`/api/carts/`)

| Método   | Endpoint             | Descripción                                                         |
| :------- | :------------------- | :------------------------------------------------------------------ |
| **POST** | `/`                  | Crea un nuevo carrito con un ID autogenerado.                       |
| **GET**  | `/:cid`              | Lista los productos pertenecientes al carrito indicado.             |
| **POST** | `/:cid/product/:pid` | Agrega un producto al carrito (incrementa `quantity` si ya existe). |

### 📋 Formato de Productos en Carrito

```json
{
	"product": "ID del producto",
	"quantity": "Número de ejemplares"
}
```

---

## 💾 Persistencia de Datos

La información se respaldará en archivos locales utilizando el sistema de archivos (**FS**):

- `products.json`: Almacena el catálogo de productos.
- `carts.json`: Almacena los carritos creados.

> **Nota:** Se debe integrar el `ProductManager` previo y desarrollar un `CartManager` para la gestión de estos archivos.

---

## 📤 Formato del Entregable

- **Plataforma:** Repositorio de GitHub.
- **Contenido:** Proyecto completo (excluir carpeta `node_modules`).
- **Pruebas:** Flujo verificable mediante **Postman** o clientes similares.
