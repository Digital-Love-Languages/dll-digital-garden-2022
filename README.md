# Digital Love Languages 2022 DigiGarden

this is the repository for http://digitallovelanguages.com, feel free to make pull requests!


# how to develop locally

run:
```
python -m SimpleHTTPServer 8000
```

then visit http://localhost:8000

__________________

while developing locally, change this line in script.js,
```
var CONFIG_FILE_URL = "http://digitallovelanguages.com/assets/config.json"
```
to
```
var CONFIG_FILE_URL = "http://localhost:8000/assets/config.json"
```
...
or else it will be loading the config from the server, and can make for the classic "why are my changes not showing up" bug



# how to deploy to the public internet
digitallovelanguages.com is published from gh-pages branch of https://github.com/mhfowler/dll-digital-garden-2022

form.digitallovelanguages.com is deployed as a flask app at 147.182.177.135:/srv/dll-digigarden-form
```
ssh root@form.digitallovelanguages.com
cd /srv/dll-digigarden-form
git pull origin main
systemctl restart dll-digigarden
```

