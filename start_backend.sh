cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py loaddata cars
python manage.py runserver
