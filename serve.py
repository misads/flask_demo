#!flask/bin/python
from app import create_app

app = create_app()
app.run(debug=True, host="0.0.0.0", port=8000)
