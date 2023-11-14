python3 -m venv venv
source venv/bin/activate

pip install Django
pip install djangorestframework
pip install markdown
pip install django-filter

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade Pillow

pip install djangorestframework-simplejwt
pip install django-multiselectfield

chmod +x manage.py
./manage.py makemigrations
./manage.py migrate