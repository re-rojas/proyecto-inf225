from pydantic import BaseModel
from typing import Optional


class Dato(BaseModel):
    id: Optional[str]
    longitud: str
    latitud: str
    profundidad: str



#aqui se trabaja con la base de datos