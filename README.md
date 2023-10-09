<!-- PROJECT LOGO -->
<p align="center">


  <h3 align="center">Xongroh</h3>

  <p align="center">
     The social marketplace designed exclusively for Creators. 
    <br />
    <a href="https://xongroh.com"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="https://xongroh.com">Website</a>
    ·
    <a href="https://github.com/teamxongroh/xongroh/issues">Issues</a>
    ·
    <a href="https://app.eraser.io/workspace/OfUVuwSbrllockrlz2An">Roadmap</a>
  </p>
    <a href="https://xongroh-public.vercel.app/">
    <img src="https://github.com/phukon/xongroh/assets/60285613/9ed7f532-36da-400d-8665-943ba82cc01d" alt="screenshot">
  </a>

</p>


# Project Guidelines and Best Practices

Please follow these guidelines to ensure smooth and efficient development:

- **Adhere to industry best practices:** We recommend following best practices for software development. You can refer to [bulletproof-react](https://github.com/alan2207/bulletproof-react) for some useful insights.

- **Avoid excessive Git Merge:** Instead of excessive use of Git Merge, it is recommended to rebase the HEADs of your branches. This helps maintain a cleaner commit history.

- **Ensure clear and consistent API versioning:** Use industry-standard methods for API versioning, and maintain comprehensive documentation. Clear and consistent API versioning helps in stable and efficient development.

- **Avoid experimental features and packages with vulnerabilities:** Do not use experimental features and packages with known vulnerabilities. Additionally, for Node.js, stick to CommonJS (CJS) modules to ensure stability. (Stability Index: 1) It's worth noting that using ES6 modules for Node.js can lead to issues, as explained in the [Node.js documentation](https://nodejs.org/docs/v12.13.0/api/esm.html#esm_ecmascript_modules).

- **Avoid Massive Refactoring:** Incremental improvements are better than massive overhauls. Refactor as you go without derailing timelines.

- **Leave It Better Than Before:** Continuously enhance code readability and cleanliness with small changes over time.

- **Embrace Imperfection:** Perfect code doesn't exist; account for real-world complexity without over-refactoring.

- **Collaborate & Seek Feedback:** Engage in peer reviews and collaborate with the team to evaluate the necessity of large-scale refactoring.

## Table of Contents
- [Usage](#usage)
- [Routes](#routes)
- [Contact Information](#contact-information)

## Usage

This server provides the backend for the Xongroh social marketplace. It handles user authentication, user registration, post management, and more.

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

## Contact Information

If you have any questions or need assistance, feel free to reach out to us through the following channels:

- WhatsApp: [Message Us](https://wa.me/919127510087?text=hi)
- Instagram: [@xongroh](https://instagram.com/xongroh)
- Twitter: [@xongroh](https://twitter.com/xongroh)

**Riki** on [GitHub](https://github.com/phukon).
