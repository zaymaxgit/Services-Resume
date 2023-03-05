from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import devResume

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/")
def home(data=Body()):

    res = devResume.start(data)
    return {"msg": "Gut", "data": data, "name": res}


"uvicorn server:app --reload --host 127.0.0.1 --port 3033"
