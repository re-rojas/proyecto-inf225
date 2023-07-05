import rasterio
src = rasterio.open("chile.tif")
print(src)#obtener crs
print()
print(src.crs)#obtener crs
print()
print(src.bounds)#obtener limites
print()
print(src.files[0])
print(type(src.files[0]))
print()
print(src.dtypes)
print()
print(src.interleaving)
print()
print(src.count)
print()
print(src.height)
print()
print(src.meta)
print()

'''
en conclusión...
metadatos básicos en resumen:
{
    'driver': 'GTiff',
    'dtype': 'uint16',
    'nodata': None, 
    'width': 1001, 
    'height': 1001, 
    'count': 3, 
    'crs': CRS.from_epsg(32631), 
    'transform': Affine(10.0, 0.0, 590520.0,
                    0.0, -10.0, 5790630.0)
}



'''