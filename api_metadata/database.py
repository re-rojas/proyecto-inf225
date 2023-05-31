from model import Metadata

import motor.motor_asyncio

client=motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
database = client.MetadataList
collection = database.Metadata


async def fetch_one_Metadata(nombre_archivo):
    document = await collection.find_one({"nombre_archivo":nombre_archivo})
    return document

async def fetch_all_Metadatas():
    metadatas = []
    cursor = collection.find({})
    async for document in cursor:
        metadatas.append(Metadata(**document))
    return metadatas

async def create_Metadata(metadata):
    document = metadata
    result = await collection.insert_one(document)
    return document

async def update_Metadata(nombre_archivo,desc):#falta arreglar el update
    await collection.update_one({"nombre_archivo":nombre_archivo},{"$set":{"description":desc}})
    document = await collection.find_one({"nombre_archivo":nombre_archivo})
    return document

async def remove_Metadata(nombre_archivo):
    await collection.delete_one({"nombre_archivo":nombre_archivo})
    return True