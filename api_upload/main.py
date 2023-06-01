import os
import shutil
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse

app = FastAPI()

path = ""

@app.get("/")
def read_root():
    return {"Ping":"al host"}

@app.post("/archivo")
async def upload_archivo(file: UploadFile = File(...)):
    with open(f'uploads/{file.filename}',"wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"file_name":file.filename}


@app.get("/archivo{nombre_archivo}")
def download_archivo(nombre_archivo):
    file_path = f'uploads/{nombre_archivo}.tif'
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="font/woff", filename=f"{nombre_archivo}.tif")
    return {"error":"file not found"}