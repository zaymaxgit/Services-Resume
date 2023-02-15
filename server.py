from fastapi import FastAPI, Body
import index

app = FastAPI()


@app.post("/")
async def home(data=Body()):

    index.start(data)
    return {"msg": "Gut", "data": data}


'''
data = {
        'items': [
            {'desc': 'Python interpreters', 'qty': 2, 'price': 'FREE'},
            {'desc': 'Django projects', 'qty': 5403, 'price': 'FREE'},
            {'desc': 'Guido', 'qty': 1, 'price': '100,000,000.00'},
        ],
        'name': "Lord",
        'category': 'Book',
        'data': [
            {'title': 'Title 1', 'desc': 'desc 1'},
            {'title': "Title 2", "desc": "desc 2"},
            {'title': "Title 3", "desc": "desc 3"}
        ]
    }
'''
