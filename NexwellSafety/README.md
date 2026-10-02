# Nexwell Safety Wear Website

A responsive full-stack business website developed for **Nexwell Safety Wear**, a real-world safety-wear business.

This project was developed as a **client-side project / side project** to provide the business with a professional online presence and an accessible catalogue for showcasing safety footwear, reflective clothing, workwear and uniforms.

The project involved requirements gathering, frontend development, backend API development, third-party API integration, responsive design, SEO implementation, deployment and production troubleshooting.

---

## Project Overview

Nexwell Safety Wear required a modern website that could:

- Establish a professional online presence
- Showcase safety-wear products
- Organise products into categories
- Allow users to browse product information
- Provide an easy way for customers to contact the business
- Provide a quick-response WhatsApp option
- Work across desktop, tablet and mobile devices
- Be deployed using a custom domain
- Deliver website enquiries directly to the business email

The website was designed and developed from the ground up using a modern JavaScript-based full-stack architecture.

---

## Client Project

**Project Type:** Real-Client Side Project  
**Industry:** Safety Wear / Personal Protective Equipment  
**Role:** Full-Stack Web Developer  
**Development:** 2026

The project provided practical experience working with real business requirements rather than a purely academic or tutorial-based application.

Responsibilities included:

- Requirements analysis
- UI implementation
- Responsive web development
- Frontend architecture
- Backend API development
- Third-party API integration
- Form handling
- Email automation
- SEO implementation
- Deployment
- Environment configuration
- Production debugging
- Version control

---

## Features

### Home Page

The homepage provides an introduction to Nexwell Safety Wear and highlights the company's products and services.

Features include:

- Hero/landing section
- Business introduction
- Product category highlights
- Featured/famous product categories
- Responsive layout
- Calls-to-action
- Footer navigation

---

### Product Catalogue

The catalogue allows users to browse the company's safety-wear products.

Products are organised into categories such as:

- Safety Footwear
- Reflective Jackets
- Workwear
- Uniforms
- Workwear Sets

Product cards display relevant product information including:

- Product image
- Product name
- Description
- Price
- Category

The catalogue was designed to remain usable across different screen sizes.

---

### Search and Product Navigation

The frontend includes product discovery functionality to make it easier for users to find products.

The interface supports:

- Product searching
- Category organisation
- Product navigation
- Responsive product cards

---

### Contact Form

A custom contact form was implemented to allow customers to send enquiries directly to the business.

The form collects:

- Name
- Surname
- Email address
- Message

The form communicates with the project's backend REST API rather than exposing email service credentials in the browser.

---

### Email Integration

The backend integrates with the **Resend email API**.

The architecture is:

Frontend  
↓  
Express REST API  
↓  
Resend API  
↓  
Business Email

Website enquiries are forwarded to the client's business email.

The implementation also supports:

- Reply-to functionality
- CC recipients
- Server-side API credentials
- Error handling
- Successful submission feedback

---

### WhatsApp Quick Response

A direct WhatsApp contact option was included to provide customers with an alternative communication channel for quick enquiries.

---

### Responsive Design

The website was designed to support:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive navigation, product layouts, forms and content sections were implemented using Tailwind CSS.

---

### SEO

Basic search-engine optimisation was implemented through:

- Page titles
- Meta descriptions
- Semantic HTML
- Open Graph metadata
- Descriptive content
- Product/category terminology

Route-specific metadata was considered to improve the way individual pages are represented by search engines and social platforms.

---

## Technology Stack

### Frontend

- **React.js**
- **JavaScript (ES6+)**
- **React Router**
- **Tailwind CSS**
- **Vite**
- HTML5
- CSS3

### Backend

- **Node.js**
- **Express.js**
- REST API
- CORS
- Express Rate Limit
- Environment variables

### Third-Party Services

- **Resend** — transactional email delivery
- **WhatsApp** — customer communication

### Deployment

- **Vercel** — frontend deployment
- **Render** — backend deployment
- Custom domain/DNS configuration

### Development Tools

- Git
- GitHub
- VS Code
- npm
- Browser Developer Tools

---

## System Architecture

```text
                    ┌──────────────────────┐
                    │      Customer        │
                    │   Web Browser        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │                      │
                    │ React + Vite         │
                    │ Tailwind CSS         │
                    │ React Router         │
                    └──────────┬───────────┘
                               │
                         HTTP Request
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Express Backend    │
                    │                      │
                    │ Node.js              │
                    │ REST API             │
                    │ CORS                 │
                    │ Rate Limiting        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Resend API       │
                    │                      │
                    │ Transactional Email  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Business Email     │
                    └──────────────────────┘
