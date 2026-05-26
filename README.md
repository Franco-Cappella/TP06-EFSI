# TP06-EFSI - Catstagram

Aplicacion web hecha con React y Vite, inspirada en una interfaz tipo Instagram. El feed carga imagenes reales de gatos desde The Cat API usando Axios.

## Diseno de referencia

El diseno visual toma como guia este Figma de comunidad:

https://www.figma.com/community/file/1004033523744290376

Se mantuvo una estetica de red social moderna con barra lateral, encabezado, historias, feed de publicaciones, modal de detalle y perfil de usuario.

## Como ejecutar el proyecto

```bash
npm install
npm run dev
```

Para generar la version de produccion:

```bash
npm run build
```

## Organizacion del proyecto

```text
src/
  components/
    feed/
      Post.jsx
      PostGrid.jsx
      Stories.jsx
    layout/
      Sidebar.jsx
      TopBar.jsx
    profile/
      ProfileView.jsx
    ui/
      PostModal.jsx
  data/
    mockUser.js
  App.jsx
  index.css
```

La estructura separa componentes por responsabilidad: layout para navegacion y encabezado, feed para publicaciones, profile para el perfil emulado y ui para la ventana modal.

## Componentes y responsabilidades

- `App.jsx`: maneja los estados principales, consume la API con `useEffect`, guarda las publicaciones con `useState`, decide si se muestra el feed o el perfil y guarda la publicacion seleccionada.
- `Sidebar.jsx`: muestra el usuario logueado emulado y permite navegar entre feed y perfil mediante props.
- `TopBar.jsx`: representa la barra superior con buscador y acciones visuales.
- `Stories.jsx`: renderiza historias simuladas para completar la estructura de red social.
- `PostGrid.jsx`: recibe el array de publicaciones por props y las renderiza dinamicamente. No hay publicaciones escritas manualmente una por una.
- `Post.jsx`: recibe una publicacion por props, muestra imagen, usuario, likes y acciones. Incluye interaccion de like con `useState`.
- `PostModal.jsx`: muestra la publicacion seleccionada con imagen ampliada, usuario, caption, likes, comentarios simulados y fecha.
- `ProfileView.jsx`: representa el perfil del usuario activo, con avatar, biografia, publicaciones, seguidores, seguidos y boton visual de editar perfil.

## Uso de props

Los componentes reciben datos y acciones desde sus padres. Por ejemplo, `PostGrid` recibe `posts` y `onOpenModal`; cada `Post` recibe su `post` individual y usa `onOpenModal(post)` para avisar a `App.jsx` que debe abrirse la visualizacion individual.

`Sidebar` recibe `currentView` y `setView` para cambiar entre feed y perfil. `ProfileView` recibe `posts` para mostrar publicaciones asociadas al usuario emulado y `onOpenModal` para abrir el detalle.

## Hooks utilizados

- `useEffect`: en `App.jsx`, para ejecutar la peticion a The Cat API al cargar la pagina.
- `useState`: en `App.jsx`, para guardar publicaciones, publicacion seleccionada, vista actual, carga y errores.
- `useState`: en `Post.jsx` y `PostModal.jsx`, para manejar la interaccion de likes.

## Consumo de API

La aplicacion usa Axios para consultar:

```text
https://api.thecatapi.com/v1/images/search?limit=15
```

La respuesta se enriquece en `App.jsx` agregando nombre de usuario, avatar, likes, caption, fecha y comentarios simulados. De esta manera se conserva el origen real de las imagenes y se completa el formato de publicacion.

## Visualizacion individual de publicaciones

La visualizacion individual se resolvio con `PostModal.jsx`. Al hacer click en una publicacion, `App.jsx` guarda esa publicacion en `selectedPost` y el modal muestra informacion ampliada: imagen grande, usuario, caption, likes, comentarios, botones de interaccion y fecha.

## Perfil de usuario emulado

El perfil activo se simula con datos fijos en `src/data/mockUser.js`. Incluye nombre de usuario, handle, avatar, biografia, cantidad de publicaciones, seguidores y seguidos. No se implementa login ni registro porque la consigna pide representar un usuario ya logueado.

## Estados principales

- `posts`: publicaciones obtenidas desde la API.
- `selectedPost`: publicacion seleccionada para el modal.
- `currentView`: controla la navegacion entre feed y perfil.
- `isLoading`: indica si la API todavia esta cargando.
- `error`: guarda un mensaje si falla la peticion.
- `isLiked`: usado localmente en publicaciones y modal para modificar likes con interaccion del usuario.

