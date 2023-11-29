(() => {
  //  prefer dont use Any, only use it  when you are learning TS

  /**
   * ¿Qué es any?
Es un tipo de dato cualquiera, literalmente, la variable que declaremos con este tipo de dato puede contener cualquier tipo de valor. Quita el análisis de tipos.

Uso
Lo podemos usar para tener mayor flexibilidad, pero hay mejores forma para hacerlo.

Se aconseja que any no sea utilizado en proyectos ya consolidados y en equipos de desarrollo con experiencia con TypeScript, en caso de migraciones de proyectos de JavaScript a TypeScript se puede permitir el uso de any.

TypeScript
Este es de forma incremental, es decir, que para sistemas o aplicaciones en las que estamos comenzando a implementar TypeScript se puede permitir el tipo de dato any, puede ser bueno para los primeros pasos en la migración del proyecto.

CAST
Pasar de un tipo de dato a otro.

as
Podemos definir como queremos que sea tratado un tipo de dato, le decimos a TypeScript que confíe en nuestro tipado. Que trate a esa variable como ese tipo de dato que le especificamos.


(variableName as dataType)
Angle bracket
Es lo mismo que as pero con otra sintaxis.


(<dataType>variableName)
   */
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 12123;

  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);


})();
