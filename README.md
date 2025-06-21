# 🌐 Personal Website

This is my full-stack personal website built with **React + Vite (frontend)** and **Node.js + Express (backend)**.
You can check out the live version on [www.juanlibonatti.com](https://www.juanlibonatti.com).

## Tech Stack

- **Frontend**: React, Vite  
- **Backend**: Node.js, Express  
- **Other**: AWS SES

## Project Structure
 - **/client**: Vite + React frontend
 - **/server**: Node + Express backend

## Getting Started

### 1. Clone the Repo and Install

```bash
git clone https://github.com/your-username/personal-website.git
cd Personal-Website
npm install
```

### 2. Set up Environment Variables on Server

```bash
cd server
cp .env.example .env
nano .env
```

### 3. Run the App

To run the client on development mode use:
```bash
cd client
npm run dev
```

To run the server on depelopment mode use:
```bash
npm run build
cd server
npm run dev
```

To run the site for production:
```bash
npm run setup
```

## Deployment
This app is deployed on an AWS EC2 instance, with:

- Domain Management: handled via Route 53 (custom domain and DNS routing).

- Email Services: uses Amazon SES for transactional email (contact form).

## License
See License.md file.
