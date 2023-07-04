import rasterio

# Abre el archivo GeoTIFF
with rasterio.open('chile.tif') as dataset:
    # Obtiene la transformación affine que contiene la información de coordenadas
    transform = dataset.transform

    # Calcula las coordenadas de los vértices del raster
    height, width = dataset.shape
    top_left = transform * (0, 0)
    top_right = transform * (width, 0)
    bottom_left = transform * (0, height)
    bottom_right = transform * (width, height)

# Imprime los resultados
print("Latitud superior izquierda:", top_left[0])
print("Longitud superior izquierda:", top_left[1])
print("Latitud superior derecha:", top_right[0])
print("Longitud superior derecha:", top_right[1])
print("Latitud inferior izquierda:", bottom_left[0])
print("Longitud inferior izquierda:", bottom_left[1])
print("Latitud inferior derecha:", bottom_right[0])
print("Longitud inferior derecha:", bottom_right[1])