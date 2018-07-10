# MasmovilCode

## Client-server test code 
  * This a test of a client - server code. The client request a list of phobes at a given endpoint of the server. The server return a mock-up list of phones. 
  * The client shows the list of the phones and allows to go into the details of each of the phones.
  
### Server
  * The small REST server is implemented with Express (Server framework on top of Node.js).
  
  #### Starting the server
  * To run the server use 
  ````
    yarn start-server 
  ````

### Client
  * Main features of the react client
    - Using 'emotion' lib to handle CSS in JS.
    - Liquid sizes. Most of the sizes of the typografy, margins and ratios are related to the with of the window. So it adapts in a very smooth way. It is combined with breakpoints to change the app sizes.
  
  #### Starting the server
  * To run the server use 
  ````
    yarn start-server 
  ````  