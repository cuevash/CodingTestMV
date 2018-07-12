# MV Code Test

## Description
  This is a simple project that demonstrates the interaction of a simple server with a single endpoint and a small react app to show the list of results.
  
### How to install
  * Install node.js and yarn
  * Clone the repository 
  
### Run server & FrontEnd
  Once you have cloned the repository, change to the repository's directory and follow the instructions.

  * Install the REST server
  `````
    cd server
    yarn
  `````  

  * Run the REST server
  `````
    cd server
    yarn runServer
  `````  

  * Build the client (From the repository's root directory)
  `````
    yarn
    yarn build
  `````  

   * Run the client (From the repository's root directory)
    Start local server to serve the built app
  `````
    yarn serve -s build
  `````   

  Follow the instructions of the command's output on the console to open a browser with the right address. Should be something like: **http://localhost:5000**

### Notes