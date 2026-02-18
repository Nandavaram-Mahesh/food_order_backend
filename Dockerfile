# 1️⃣ Use official Node image
FROM node:20

# 2️⃣ Create app directory inside container
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy rest of application code
COPY . .

RUN npm run build

# 6️⃣ Expose the port your app runs on
EXPOSE 5000


# # 7️⃣ Start the application
CMD ["node", "dist/server.js"]