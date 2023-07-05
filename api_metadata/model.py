from pydantic import BaseModel


class Metadata(BaseModel): #los que tienen obtener son los que deben implementarse por fuera de esta api
    nombre_archivo: str #obtener el nombre con src.files
    autor: str #obtener tamaño con os.path.getsize(file_path)
    driver: str #'GTiff'
    dtype: str #'uint16'
    nodata: str #None
    width: int #1001 
    height: int #1001 
    count: int #3 
    crs: str #CRS.from_epsg(32631) 
    transform: str #Affine(10.0, 0.0, 590520.0, /n 0.0, -10.0, 5790630.0)
    

