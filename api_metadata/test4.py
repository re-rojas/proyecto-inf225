import rasterio
import pyproj


# Abrir el archivo TIFF en modo lectura
with rasterio.open('chile.tif') as dataset:
    # Obtener la bounding box
    bounds = dataset.bounds

# Extraer los valores de la bounding box en variables
left, bottom, right, top = bounds

# Imprimir los valores
print('Mínimo X:', left)
print('Mínimo Y:', bottom)
print('Máximo X:', right)
print('Máximo Y:', top)

# Definir el CRS de la BoundingBox
src_crs = pyproj.CRS.from_string(str(dataset.crs))  # Reemplaza 'tu_crs_aqui' con el CRS correcto


# Crear un transformador de coordenadas
transformer = pyproj.Transformer.from_crs(src_crs, pyproj.CRS.from_string('EPSG:4326'), always_xy=True)  # 'EPSG:4326' es WGS84

# Convertir las posiciones a longitud y latitud
lon_left, lat_bottom = transformer.transform(left, bottom)
lon_right, lat_top = transformer.transform(right, top)

print("Longitud izquierda:", lon_left)
print("Latitud inferior:", lat_bottom)
print("Longitud derecha:", lon_right)
print("Latitud superior:", lat_top)