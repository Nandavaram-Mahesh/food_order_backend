# npm init -y
# npm i typescript @types/node  tsc-watch -D
# npm i express 
# npm i @types/express -D
# tsc --init


MicroService Architecture 

auth-service/
│
├── src/
│   │
│   ├── app.js                # Express app setup
│   ├── server.js             # Server bootstrap
│   │
│   ├── config/               # App & env config
│   │   ├── env.js
│   │   ├── database.js
│   │   └── jwt.js
│   │
│   ├── modules/              # Feature-based modules
│   │   ├── user/
│   │   │   ├── user.model.js
│   │   │   ├── user.service.js
│   │   │   ├── user.controller.js
│   │   │   ├── user.routes.js
│   │   │   └── user.validation.js
│   │   │
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.service.js
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── token/
│   │   │   ├── token.service.js
│   │   │   └── token.util.js
│   │   │
│   │   ├── otp/
│   │   │   ├── otp.service.js
│   │   │   └── otp.util.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimiter.middleware.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   ├── response.js
│   │   └── hash.js
│   │
│   ├── routes.js             # Central route loader
│   │
│   └── constants/
│       ├── messages.js
│       └── roles.js
│
├── tests/
│   ├── auth.test.js
│   └── user.test.js
│
├── .env
├── package.json
└── README.md
