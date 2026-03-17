import os
import django
from django.contrib.auth import get_user_model

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

User = get_user_model()

USERNAME = os.getenv('DJANGO_SUPERUSER_USERNAME', 'admin')
EMAIL = os.getenv('DJANGO_SUPERUSER_EMAIL', 'admin@example.com')
PASSWORD = os.getenv('DJANGO_SUPERUSER_PASSWORD', 'admin1234')

if not User.objects.filter(username=USERNAME).exists():
    print(f"Creando superusuario: {USERNAME}")
    User.objects.create_superuser(USERNAME, EMAIL, PASSWORD)
else:
    print(f"El superusuario {USERNAME} ya existe.")
