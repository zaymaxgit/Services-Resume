from docxtpl import DocxTemplate


def start(context):
    doc = DocxTemplate("test.docx")
    doc.render(context)
    doc.save("final.docx")
