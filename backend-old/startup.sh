python3 -m venv venv
virtualenv venv
# source venv bin activate does not work on startup.sh, if venv does not activate properly, please do this manually
source venv/bin/activate or venv/Scripts/activate

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade Pillow
pip install psycopg2
pip install Django
pip install djangorestframework
pip install markdown
pip install django-filter
pip install djangorestframework-simplejwt
pip install django-multiselectfield
pip install django-cors-headers

chmod +x manage.py
./manage.py flush or python manage.py flush
./manage.py makemigrations or python manage.py makemigrations
./manage.py migrate or python manage.py migrate