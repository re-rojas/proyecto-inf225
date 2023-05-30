
#Esta wea es para un dict osea solo un objeto. Vale decir un dato altimetrico en concreto, por eso los atributos
def dato_altimetrico_Entity(item) -> dict:
 return{
  "id": item["id"],
  "longitud": item["longitud"],
  "latitud" : item["latitud"],
  "profundidad" : item["profundidad"]
  
 }

#Esta wea es para una list osea la lista de todos los objetos. Vale decir la lista de datos altimetricos.


def datos_altimetricos_Entity(entidad) -> list:
 [dato_altimetrico_Entity(item) for item in entidad]



#ahi hay que poner los atributos en los que trabajemos los datos, me los saque de la raja estos.