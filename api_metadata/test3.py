import pyproj

# Definir el CRS de la BoundingBox
src_crs = pyproj.CRS.from_string('EPSG:32719')

# Definir las posiciones de la BoundingBox
left = 412503.951666887
bottom = 7666009.83682211
right = 417336.951666887
top = 7667692.83682211

# Crear un transformador de coordenadas
transformer = pyproj.Transformer.from_crs(src_crs, pyproj.CRS.from_string('EPSG:4326'), always_xy=True)  # 'EPSG:4326' es WGS84

# Convertir las posiciones a longitud y latitud
lon_left, lat_bottom = transformer.transform(left, bottom)
lon_right, lat_top = transformer.transform(right, top)

print("Longitud izquierda:", lon_left)
print("Latitud inferior:", lat_bottom)
print("Longitud derecha:", lon_right)
print("Latitud superior:", lat_top)