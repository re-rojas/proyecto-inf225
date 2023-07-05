# ADR 1: Uso de FastAPI para el desarrollo del API

## Título
Uso de FastAPI para el desarrollo de la API

## Contexto
Se requiere un framework para desarrollar una API el cual sea rápido, eficiente y sea facil de implementar. A su vez debe estar en un lenguaje que tengamos dominio como de preferencia Python. Las alternativas que estuvimos considerando iban desde FastAPI, Express y Django.

## Decisión
Decidimos usar FastAPI. El cual es un framework moderno y rápido (de alto rendimiento), el cual destaca por su facil implementacion y documentacion, se basa en Python desde la version 3.6 hasta la mas reciente basado en las ideas de Flask, con una capa adicional de funcionalidades. El hecho de que haya sida recomendada por el profesor, tambien nos motivo a elegir FastAPI por sobre otros frameworks ya conocidos.

## Status
Aceptada

## Consecuencias
Con FastAPI obtuvimos una velocidad de respuestas más rápida y ademas una mayor eficiencia. Sin embargo, tuvimos que aprender a usar una nueva tecnologia, lo cual implico tiempo y esfuerzo para poder aprender y facilitar su implementacion. Por otro lado, la utilizacion de FastAPI, nos genero automaticamente una interfaz interactiva con la documentacion del funcionamiento de API.

---

# ADR 2: Uso de React.js para la interfaz de usuario

## Título
Uso de React.js para la interfaz de usuario

## Contexto
Para el desarrollo de la interfaz de usuario de la plataforma web, vamos a necesitar un framework que sea eficiente, facil de implementar, moderno y que nos permita crear una experiencia de usuario interactiva y atractiva para el usuario. Consideramos varios frameworks y bibliotecas para la interfaz de usuario, pero al tener una experiencia previa con React.js nos quedamos con esta como unica alternativa.

## Decisión
Decidimos usar React.js. El cual un framework de JavaScript, el cual tenemos familiarizados debido a previas experiencias, este framework es ampliamente utilizado para la construccion de interfaces de usuario. Una de las razones por las cuales nos decidimos por React.js es que podemos crear componentes reutilizables, esto se traduce en que el código va a ser más fácil de mantener y testear. También aprovecharemos la alta documentacion flexibilidad que podemos llegar a encontrar en linea 

## Status
Aceptada

## Consecuencias
Al decidir usar React.js, podemos aprovechar una gran comunidad de desarrolladores y una amplia gama de recursos y bibliotecas auxiliares. Debido a que, ya teniamos aprendido React.js teniamos cierto entendimiento sobre sus conceptos únicos como los hooks y el ciclo de vida de los componentes que se vienen a la hora de trabajar con dicho framework. A pesar de esto, creemos que al utilizar un framework el cual esta en constante cambio, ya que recibe bastantes actualizaciones, podria darse el caso que nuestra plataforma web quede obsoleta, si no se hacen actualizaciones o mantenciones.

---