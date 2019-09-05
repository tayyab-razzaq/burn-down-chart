# **Steps to create a react django project like this**

**Prerequisites**

Node and Npm

Create-React-App (npm package)

Python

Django           (pip package)

Make sure to commit after every step.

1- Create Project  with django-admin startproject <project_name> command.
Add Jetbrains configs files to .gitignore (.vscode in case of visual studio code).

2- Create requirements.txt files and add all virtualenv packages in it using pip freeze > requirements.txt.

3- Add templates folder and define its path in settings.py and serve basic index.html from root of server.

4- Use create-react-app <app_name> to create basic react project. Add node_modules added to .gitignore.

5- Use npm run eject to eject the code from the boiler plate, so we can change configuration, so that react app should would with django.

6- Move package.json to main folder. Paths in config/paths file is updated according to package.json. (we are only doing this so that we can generate backend/frontend build from the same directory).

7- Update frontend config to generate a stat file while building. Stat file will contains all the detail of files which will be generated after building. Add a localPaths file where we will define our build path Updated webpackDevserver config to work with any backend. (use webpack-bundle-tracker for generating stats file.).

8- Use django-webpack-loader to serve the react build by reading stats from webpack-stats.json file which is generated due to webpack-bundle-tracker package while generating react build.

For development
Now react dev version can be served through 3000 and if you set
PROD = False in settings.py you can serve that 3000 build though 8000

For production
PROD = True in settings.py and run npm run build the collect stats file
And Run it from 8000

frontend build will be generated in static folder and then you have to
run python manage.py collectstatic --noinput to collect static files
and it will copy build folder to staticfiles folder if static files
storage is set to local otherwise destination will be static files
storage like cdn or s3

Make sure in index.html of django index template you have rendered
all possible bundles, for now I've added vendor~main and main.

To use s3 as static file serving

Just set S3_STATIC=True and add your s3 credentials and bucket name and run collectstatic command to upload your static files. 
Make sure your bucket acl is public-read for build files
