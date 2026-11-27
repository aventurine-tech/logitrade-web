"""Build public/favicon.ico (16, 32 and 48 px) from public/favicon-192.png. Needs Pillow."""
from PIL import Image

Image.open('public/favicon-192.png').save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('public/favicon.ico')
