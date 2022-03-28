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