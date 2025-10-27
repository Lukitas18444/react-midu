# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])


¡Hola! Por supuesto, con gusto te proporciono ejercicios de menor a mayor complejidad para que practiques useState y useEffect en React. ⚛️

Estos ejercicios están diseñados para ser completados en un entorno React (como un proyecto creado con Vite o create-react-app).

1. Ejercicios de useState (Gestión de Estado Básico)
Nivel 1: Contador Simple (Principiante)
Crea un componente que muestre un número. Añade dos botones: uno para incrementar el número y otro para decrementarlo. Usa useState para gestionar el valor del contador.

Nivel 2: Alternador de Visibilidad (Intermedio)
Crea un componente con un botón y un texto o un <div> que muestre un mensaje. El botón debe alternar la visibilidad del texto entre visible y oculto. Usa useState para un valor booleano (verdadero/falso).

Nivel 3: Formulario de Entrada Simple (Intermedio)
Crea un componente con un campo de entrada de texto (<input type="text">) y un párrafo (<p>). A medida que el usuario escribe en el campo, el texto en el párrafo debe actualizarse en tiempo real para reflejar la entrada. Usa useState para almacenar el valor de la entrada.

2. Ejercicios de useEffect (Efectos Secundarios)
Nivel 4: Título de Documento Dinámico (Principiante - useEffect con Array de Dependencias Vacío)
Crea un componente que, al montarse (por única vez), use useEffect para cambiar el título de la pestaña del navegador (document.title) a un mensaje específico (ej: "Mi Primera App con Efecto"). Usa un array de dependencias vacío ([]) para simular componentDidMount.

Nivel 5: Contador que Registra Clics (Intermedio - useEffect con Dependencia)
Combina el Contador Simple del Nivel 1.

Usa useState para el número.

Usa useEffect para mostrar un mensaje en la consola cada vez que el valor del contador cambie. El mensaje debe indicar el nuevo valor del contador. Usa el estado del contador en el array de dependencias del useEffect.

Nivel 6: Temporizador con Limpieza (Avanzado - useEffect con Limpieza)
Crea un componente que muestre un temporizador (segundos) que se incrementa automáticamente cada segundo.

Usa useState para almacenar los segundos.

Usa useEffect para iniciar un setInterval que actualice los segundos.

Implementa la función de limpieza (la función de retorno de useEffect) para detener el temporizador (clearInterval) cuando el componente se desmonte o cuando el efecto se vuelva a ejecutar.

3. Ejercicios Combinados y Avanzados
Nivel 7: Obtener Datos de una API (Avanzado - useState y useEffect con Fetch)
Crea un componente para mostrar datos de una API pública, por ejemplo, https://jsonplaceholder.typicode.com/todos/1.

Usa useState para:

Almacenar los datos obtenidos (data).

Gestionar el estado de carga (isLoading).

Manejar cualquier error (error).

Usa useEffect para llamar a la API cuando el componente se monte.

Muestra un mensaje de "Cargando..." mientras se realiza la solicitud.

Muestra los datos (ej: el título del todo) una vez que se reciban.

Nivel 8: Búsqueda con Retardo (Debounce) (Experto - useState, useEffect y Lógica de Debounce)
Crea un campo de búsqueda (<input>).

Usa useState para almacenar el término de búsqueda actual.

Usa useEffect para realizar una acción de "búsqueda" (ej: un console.log simulando la llamada a una API) SOLO si el usuario ha dejado de escribir durante 500ms.

Esto implica configurar un setTimeout dentro de useEffect.

La clave es usar la función de limpieza de useEffect para cancelar (clearTimeout) el temporizador anterior cada vez que el término de búsqueda cambie, y solo permitir que el último temporizador se ejecute. La dependencia debe ser el término de búsqueda.

¡Éxito en tu práctica! Si tienes alguna duda mientras los desarrollas, no dudes en preguntar. 🚀
```
