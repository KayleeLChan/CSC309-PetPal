python3 -m venv venv
virtualenv venv
# source venv bin activate does not work on startup.sh, if venv does not activate properly, please do this manually
source venv/bin/activate

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade Pillow
pip install Django
pip install djangorestframework
pip install markdown
pip install django-filter
pip install djangorestframework-simplejwt
pip install django-multiselectfield

chmod +x manage.py
./manage.py flush
./manage.py makemigrations
./manage.py migrate