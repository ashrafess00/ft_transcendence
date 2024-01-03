# ft_transcendence - Pong Tournament Website

Welcome to the ft_transcendence Surprise project repository! This project aims to create an interactive and engaging Pong tournament website adhering to specific technical requirements, security considerations, and modular development.

## Table of Contents

- [Overview](#overview)
- [Minimal Technical Requirements](#minimal-technical-requirements)
- [Modules](#modules)
  - [Web](#web)
  - [User Management](#user-management)
  - [Gameplay and User Experience](#gameplay-and-user-experience)
  - [AI-Algo](#ai-algo)
  - [Cybersecurity](#cybersecurity)
  - [Devops](#devops)
  - [Graphics](#graphics)
  - [Accessibility](#accessibility)
  - [Server-Side Pong](#server-side-pong)
- [Security Concerns](#security-concerns)
- [Roadmap](#roadmap)

## Overview

This project focuses on creating a Pong tournament website with the following major modules:

- **Web:** Utilizing a backend framework, frontend framework, and optional database.
- **User Management:** Standard user management, remote authentication, and users across tournaments.
- **Gameplay and User Experience:** Supporting remote players, multiplayer functionality, live chat, and AI opponents.
- **AI-Algo:** Implementing AI opponents and user/game stats dashboards.
- **Cybersecurity:** Integrating WAF/ModSecurity, GDPR compliance, Two-Factor Authentication (2FA), and JWT.
- **Devops:** Setting up infrastructure for log management, monitoring system, and designing the backend as microservices.
- **Graphics:** Utilizing advanced 3D techniques for enhanced visual aesthetics.
- **Accessibility:** Supporting all devices, expanding browser compatibility, multiple language support, accessibility for visually impaired users, and Server-Side Rendering (SSR) integration.
- **Server-Side Pong:** Replacing basic Pong with server-side Pong and implementing an API for gameplay via CLI against web users.

## Minimal Technical Requirements

To comply with project constraints, the website must be a single-page application, developed with or without a backend. The frontend should use pure vanilla Javascript. If a backend is included, it must be written in pure Ruby, and Docker must be used for containerization.

## Modules

### Web

- **Major Module:** Use a Framework as a backend.
- **Minor Module:** Use a front-end framework or toolkit.
- **Minor Module:** Use a database for the backend.
- **Major Module:** Store the score of a tournament in the Blockchain.

### User Management

- **Major Module:** Standard user management, authentication, users across tournaments.
- **Major Module:** Implementing remote authentication.

### Gameplay and User Experience

- **Major Module:** Remote players.
- **Major Module:** Multiplayers (more than 2 in the same game).
- **Major Module:** Add Another Game with User History and Matchmaking.
- **Minor Module:** Game Customization Options.
- **Major Module:** Live chat.

### AI-Algo

- **Major Module:** Introduce an AI Opponent.
- **Minor Module:** User and Game Stats Dashboards.

### Cybersecurity

- **Major Module:** Implement WAF/ModSecurity with Hardened Configuration and HashiCorp Vault for Secrets Management.
- **Minor Module:** GDPR Compliance Options with User Anonymization, Local Data Management, and Account Deletion.
- **Major Module:** Implement Two-Factor Authentication (2FA) and JWT.

### Devops

- **Major Module:** Infrastructure Setup for Log Management.
- **Minor Module:** Monitoring system.
- **Major Module:** Designing the Backend as Microservices.

### Graphics

- **Major Module:** Use of advanced 3D techniques.

### Accessibility

- **Minor Module:** Support on all devices.
- **Minor Module:** Expanding Browser Compatibility.
- **Minor Module:** Multiple language supports.
- **Minor Module:** Add accessibility for Visually Impaired Users.
- **Minor Module:** Server-Side Rendering (SSR) Integration.

### Server-Side Pong

- **Major Module:** Replacing Basic Pong with Server-Side Pong and Implementing an API.
- **Major Module:** Enabling Pong Gameplay via CLI against Web Users with API Integration.

## Security Concerns

To ensure a basic functional website, address the following security concerns:

- Hash passwords in the database.
- Protect against SQL injections/XSS.
- Enable HTTPS connection for all aspects.
- Implement form and user input validation.

## Roadmap

The project will progress through the following phases:

1. **Setup and Backend Development**
   - Choose and set up a backend framework.
   - Implement basic user management.

2. **Frontend Development**
   - Develop a single-page application using pure vanilla Javascript.
   - Explore options for frontend frameworks or toolkits.

3. **Gameplay Features**
   - Implement basic Pong gameplay.
   - Add remote player functionality.
   - Introduce multiplayer and tournament features.

4. **Security and DevOps**
   - Implement security measures.
   - Set up infrastructure for log management and monitoring.
   - Design the backend as microservices.

5. **Advanced Features**
   - Integrate AI opponents.
   - Implement advanced graphics techniques.
   - Enhance user experience with live chat and customization options.

6. **Accessibility and Finalization**
   - Ensure compatibility with various devices and browsers.
   - Implement multiple language support.
   - Add accessibility features for visually impaired users.
   - Finalize SSR integration and other minor modules.
