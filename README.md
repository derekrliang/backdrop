# backdrop

> Screensaver web application feeding on photos from 500px.

## Introduction

Objective of this project is to get familiar with Angular 2 and TypeScript.

Client Frameworks:
* Angular 2 Final Release (TypeScript)
* [Foundation](http://foundation.zurb.com/)

Backend Frameworks:
* Express (TypeScript)

External Resources:
* 500px API

## Getting Started

### Getting 500px Consumer API Key

500px's API is authenticated and require either: 1) consumer key or 2) OAuth. For now, we won't be needing OAuth as we'll be doing simple queries for featured photos that only requires a valid consumer key.

1) You'll need a 500px account before we can get a consumer API key.
2) Head over to your [user settings](https://500px.com/settings) and go to the Applications tab.
3) Register a new application, it should look like this:

![Register Application on 500px](public/readme/500px-register-application.png)

4) After you register, you will get a consumer key. We'll be using it to get photos from 500px.

## API

### GET Photos

> http://localhost:3000/photos