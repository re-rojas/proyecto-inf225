from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Metadata

app = FastAPI()

from database import (
    fetch_one_Metadata,
    fetch_all_Metadatas,
    create_Metadata,
    update_Metadata,
    remove_Metadata,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping":"al host"}


@app.get("/api/all")#obtener todos los objetos en db
async def get_Metadata():
    response = await fetch_all_Metadatas()
    return response

@app.get("/api/metadata", response_model=Metadata)#obtener metadata segun nombre
async def get_Metadata_by_id(nombre_archivo:str):
    response= await fetch_one_Metadata(nombre_archivo)
    if response:
        return response
    raise HTTPException(404,"No hay metadata para ese nombre de archivo")

@app.post("/api/metadata", response_model=Metadata)#crear nueva instancia
async def post_Metadata(Metadata:Metadata):
    response = await create_Metadata(Metadata.dict())
    if response:
        return response
    raise HTTPException(400, "Bad Request")
    

@app.put("/api/metadata{nombre_archivo}/", response_model=Metadata)#actualizar
async def put_Metadata(nombre_archivo:str, desc:str):
    response = await update_Metadata(nombre_archivo,desc)
    if response:
        return response
    raise HTTPException(404,"No hay metadata para ese nombre de archivo")

@app.delete("/api/metadata")#borrar
async def delete_Metadata(nombre_archivo:str):
    response = await remove_Metadata(nombre_archivo)
    if response:
        return "Eliminada la metadata para ese archivo"
    raise HTTPException(404,"No hay metadata para ese nombre de archivo")

