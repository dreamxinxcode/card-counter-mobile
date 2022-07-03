import os

for file in os.listdir('./'):
    os.rename(f'./{file}', file.replace('jack', 'J'))
