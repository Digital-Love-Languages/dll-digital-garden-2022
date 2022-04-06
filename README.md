# digitallovelanguages2022


# deployment
digitallovelanguages.com is published from gh-pages branch of https://github.com/mhfowler/dll-digital-garden-2022

form.digitallovelanguages.com is deployed as a flask app at 147.182.177.135:/srv/dll-digigarden-form
```
ssh root@form.digitallovelanguages.com
cd /srv/dll-digigarden-form
git pull origin main
systemctl restart dll-digigarden
```


# local development 

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