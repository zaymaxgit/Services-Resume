from docxtpl import DocxTemplate
import random


def randName(l=5):
    cons = "bcdfghjklmnpqrstvwxyz"
    vol = "aeiou"
    return "".join(random.choice((cons, vol)[i % 2]) for i in range(l))


def start(context):
    print(context)
    doc = DocxTemplate("./Pattern/Resume.docx")
    doc.render(context)
    name = randName(6)
    doc.save(f"./Ready/{name}.docx")
    return name
