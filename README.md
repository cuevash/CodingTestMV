# Masmovil Code

## Description
  This is a simple project that demonstrates the use of a simple server with a single endpoint and small react app to show the list of results.
  
### How to install
  * Install node.js
  * Clone the repository 
  
### Run server & FrontEnd
  Once you have cloned the repository, change to the repository's directory and follow the instructions.

  * Run the REST server
  `````
    cd server
    yarn runServer
  `````  

  * Build the client (From the repository's root directory)
  `````
    yarn build
  `````  

   * Run the client (From the repository's root directory)
   Install the 'serve' package locally. It allows to run a web server locally
  `````
    yarn add serve --dev
  `````   
  And run a local server to serve the built app

  `````
    yarn serve -s build
  `````   

  Follow the instrucctions of the command's output on the console to open a browser with the right address. Should be something like: **http://localhost:5000**

### Notes
