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

#el primero es responsable de
#proveer los métodos apropiados para publicar/descargar/buscar (solo por
#nombre) un archivo-> HU1
#el segundo debe proveer los métodos apropiados
#para guardar/descargar metadata asociada -> HU2

@pelao.get("/DATOALTIMETRICO")
def get_datos_altimetrico():
    return datos_altimetricos_Entity(conn.local.dato.find())

@pelao.post("/DATOALTIMETRICO")
def post_dato_altimetrico(dato : Dato):
    newdata = dict(dato)
    id = conn.local.dato.save(newdata).inserted_id
    return str(id)

@pelao.get("/DATOALTIMETRICO/{id}")
def get_dato_altimetrico():
    return "HOLASDASDASDa"

@pelao.put("/DATOALTIMETRICO/{id}")
def update_dato_altimetrico():
    return "HOLASDASDASDa"

@pelao.delete("/DATOALTIMETRICO/{id}")
def delete_dato_altimetrico():
    return "HOLASDASDASDa"