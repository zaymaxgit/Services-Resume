from fastapi import FastAPI, Body
import devResume

app = FastAPI()


@app.post("/")
async def home(data=Body()):

    res = devResume.start(data)
    return {"msg": "Gut", "data": data, "name": res}


"uvicorn server:app --reload --host 0.0.0.0 --port 3033"
