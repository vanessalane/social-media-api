# Social Media API

## Description
A REST API for a social media app. Built with Express, Mongoose, and MongoDB.

## User Story
**As a** social media startup, **I want** an API for my social network that uses a NoSQL database **so that** my website can handle large amounts of unstructured data.

## Usage
1. Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to run the server and make the API live
5. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)

## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

## Packages
- express
- moment
- mongoose

## Questions
If you have questions, email me at [vlane0593@gmail.com](mailto:vlane0593@gmail.com) or reach out on [GitHub](https://www.github.com/vanessalane).