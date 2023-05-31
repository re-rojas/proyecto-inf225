import rasterio
src = rasterio.open("archivo.tif")
print(src.crs)#obtener crs
print(src.bounds)#obtener limites
print(src.files)
print(src.dtypes)
print(src.interleaving)
print(src.count)#number of raster bands
print(src.height)
print(src.meta)

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