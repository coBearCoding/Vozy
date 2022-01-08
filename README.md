# Vozy
### Rules to consider
The following applications are required.
- `Docker` -> running the dockerfile and container
- `Docker-compose` -> for the composition of the dockerfile and images needed for containers.
------ 
### Installation
1. Clone the repository `git clone https://github.com/coBearCoding/Vozy.git` 
2. Get into the Vozy folder with `cd Vozy`
3. Once inside the folder you should run the following command `docker-compose up --build`
------
### Documentation
#### Division of folders
The files are divided into:
- Models -> Where Schemas and Database Connection is handled.
- Controllers -> Where Logic of the app is handled.
- Routes -> Where the endpoints are handled.
- Configs -> Where most of the apps configurations are done (load of middlewares).
- Tests -> This folder contains the mains tests done in the application.
------
#### Main File and Config Folder
The first file where the app enters is the main.js file, in this file everything is loaded
for simplifying most of the code it got divided into the configs folder into 2 parts to 
handle applications middlewares and database connection settings.

#### Routes
Routes files are the files that follow the path of the endpoints that get created.
### Controllers
Controllers are the files that handle the logic and how data must be processed before getting into the model.
### Models
Models are the files that handle the Schema that needs to be sent and how the information will be migrated to MongoDB.

### Testing the APP
For testing how the API application works you can use the program `POSTMAN` and enter the following urls:
- localhost:3000/api/register -> for registering a new user. Type of endpoint `GET`
- localhost:3000/api/posts/ -> for getting all the posts a user has. Type of endpoint `POST`
- localhost:3000/api/posts/create -> for creating new posts for that specific user. Type of endpoint `POST`

#### How to send Parameters
Most parameters in the `POST` endpoints are sent in the `Body` as `x-www-form-urlencoded`, each endpoint has different needed parameters
#### Parameters
- register: `username`,`name`,`surname `,` password`
- post/create: `title`,`description`,`username `,` user_id`

# End of Documentation
Thanks for reading this .ReadMe file hope it helped understand the project structure and happy coding! :)

