# **Omit y Pick Type**

Los tipos __Omit__ y __Pick__ en TypeScript son utility types que te permiten crear un nuevo tipo basado en un tipo existente, pero omitiendo o seleccionando algunas de las propiedades del tipo original.

## **Omit en TypeScript**

Utilizamos la siguiente expresión para definir un __Omit__: __Omit<T, K>__. Con esto generamos un nuevo tipo que tiene todas las propiedades de __T__ excepto las especificadas en __K__. Veamos ejemplo en código:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Omit` para omitir ciertas propiedades de la interfaz User
type UserWithoutContact = Omit<User, 'email' | 'phoneNumber'>; // 👈 Nuevo tipo

// `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

let user: UserWithoutContact = {
  id: 1,
  name: 'Carlos Araujo',
};

console.log(user); // { id: 1, name: 'Carlos Araujo' }
```

En este caso, hemos usado __Omit__ para excluir las propiedades __email__ y __phoneNumber__ de la interfaz __User__. Por lo tanto, el nuevo tipo __UserWithoutContact__ solo tiene las propiedades __id__ y __name__.

## **Pick en TypeScript**

Empleamos la siguiente expresión para definir un __Pick__: __Pick<T, K>__. Con esto producimos un nuevo tipo que solo tiene las propiedades de __T__ que se especifican en __K__. Veamos ejemplo en código:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Pick` para seleccionar ciertas propiedades de User
type UserContactInfo = Pick<User, 'email' | 'phoneNumber'>;

// `UserContactInfo` es ahora un tipo con solo las propiedades `email` y `phoneNumber`

let contactInfo: UserContactInfo = {
  email: "user@email.com",
  phoneNumber: "653-951-802"
};

console.log(contactInfo); // { email: "user@email.com", phoneNumber: "653-951-802" }
```

En este caso, hemos empleado __Pick__ para seleccionar las propiedades __email__ y __phoneNumber__ de la interfaz __User__. Por lo tanto, el nuevo tipo __UserContactInfo__ solo tiene los atributos __email__ y __phoneNumber__.
