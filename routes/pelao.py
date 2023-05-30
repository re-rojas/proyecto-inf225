from fastapi import APIRouter
from config.db import conn
from schemas.pelao import dato_altimetrico_Entity,datos_altimetricos_Entity
from models.pelao import Dato

pelao = APIRouter()

#http://127.0.0.1:8000

@pelao.get("/")
def index():
    return "Buenas!" 

@pelao.get("/quien")
def dimequien():
    return "El pelao "

#poner datos altimetriocs -> almacenar datos altimetricos -> HU1
#sacar datos altimetricos -> descargar datos altimetricos -> HU2

@pelao.get("/DATOALTIMETRICO")
def get_datos_altimetrico():
    return datos_altimetricos_Entity(conn.local.user.find())

@pelao.post("/DATOALTIMETRICO")
def post_dato_altimetrico(dato : Dato):
    newdata = dict(dato)
    print(newdata)
    return "recibido"

@pelao.get("/DATOALTIMETRICO/{id}")
def get_dato_altimetrico():
    return "HOLASDASDASDa"

@pelao.put("/DATOALTIMETRICO/{id}")
def update_dato_altimetrico():
    return "HOLASDASDASDa"

@pelao.delete("/DATOALTIMETRICO/{id}")
def delete_dato_altimetrico():
    return "HOLASDASDASDa"