from fastapi import FastAPI
from routes.pelao import pelao


app = FastAPI()

#http://127.0.0.1:8000


app.include_router(pelao)