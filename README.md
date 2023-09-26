## Routes

### User Routes

| Endpoint                            | Type   | Description                                         |
|-------------------------------------|--------|-----------------------------------------------------|
| 🟢 `/v1/auth/register`               | POST   | Register a new user.                               |
| 🟢 `/v1/auth/authenticate`           | POST   | Authenticate a user.                               |
| 🔵 `/v1/user/getAllUsers`           | GET    | Get a list of all users.                           |
| 🔵 `/v1/user/getUserById/:id`       | GET    | Get user details by ID.                            |
| 🔵 `/v1/user/generateOTP`           | GET    | Generate a one-time password for user verification.|
| 🔵 `/v1/user/verifyOTP`             | GET    | Verify a one-time password for user verification.  |
| 🔵 `/v1/user/createResetSession`    | GET    | Create a password reset session for a user.        |
| 🟠 `/v1/user/updateuser`            | PATCH  | Update user information.                           |
| 🟠 `/v1/user/resetPassword`         | PUT    | Reset a user's password.                           |

### Post Routes

| Endpoint                            | Type   | Description               |
|-------------------------------------|--------|---------------------------|
| 🔵 `/v1/post/getAllPosts`           | GET    | Get a list of all posts.  |
| 🟢 `/v1/post/createPost`            | POST   | Create a new post.        |
| 🟠 `/v1/post/updatePost`           | PUT    | Update a post.            |
| 🔴 `/v1/post/deletePost`           | DELETE | Delete a post.            |

### Authentication Routes

| Endpoint                            | Type   | Description         |
|-------------------------------------|--------|---------------------|
| 🟢 `/v1/auth/login`                 | POST   | User login.         |
| 🔵 `/v1/auth/refresh`               | GET    | Refresh the user's access token. |
| 🟢 `/v1/auth/logout`                | POST   | User logout.        |
