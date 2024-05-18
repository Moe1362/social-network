# social-network
Social Network API

## Description.

This is an API built on Node.js that enables users to perform CRUD operations on data models related to social networking. It utilizes a NoSQL database and offers support for various models such as friends, users, thoughts, and reactions. These models can be retrieved either by their unique IDs or in their entirety. By leveraging the power of Node.js and Mongoose, this API provides a user-friendly and scalable solution for managing social networking data, removing the limitations typically associated with traditional relational databases.
#

## The Challenge:

The task involved creating a RESTful API for a social media startup, enabling them to carry out CRUD operations on data models for users, thoughts, and reactions. The API was developed utilizing Node.js and Mongoose, with a focus on scalability to handle substantial volumes of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

Test API: use Insomnia or a similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.
#

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

1. GET /api/users - get all users
2. GET /api/users/:userId - get a single user by ID
3. POST /api/users - create a new user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

## Installation Process:
1. Obtain the repository by either cloning it from GitHub or downloading the zip folder.
2. Open the repository in your preferred source code editor.
3. Launch the integrated terminal within the editor and follow the installation instructions mentioned in the "Built With" section of the provided documentation to ensure that the cloned code functions properly.

## What I Learned:
1. Developed a RESTful API using Node.js and Mongoose.
2. Employed a NoSQL database to efficiently manage unstructured data.
3. Established endpoints to facilitate CRUD operations on data models for users, thoughts, and reactions.
4. Implemented additional endpoints to enable the addition and removal of friends from a user's friend list.
5. Thoroughly tested API endpoints using the Insomnia tool.
6. Proficiently handled HTTP requests and processed JSON-formatted data.


### Copyright © 2023 Mohammad Abbasi
#


### Live video Link: 

https://drive.google.com/file/d/1n-s6WaoeUHRGgJSldYLiPOClhjAOoseh/view

## License & Copyright ©
#
  
 MIT License

#
