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

### Clone Project

```
git clone https://github.com/derekrliang/backdrop.git
cd backdrop
```

### server.json

`server/server.json` is a configuration file of constants required for the server. It is by default ignored by git, so you won't check in your private secrets and keys into a public repository.

``` json
{
    "consumerKey": "QhnUTYnELsMY6s6yLa3iDtlIkGScjL3ZPSIVa21A"
}
```

### Getting 500px Consumer API Key

500px's API is authenticated and require either: 1) consumer key or 2) OAuth. For now, we won't be needing OAuth as we'll be doing simple queries for featured photos that only requires a valid consumer key.

1) You'll need a 500px account before we can get a consumer API key.
2) Head over to your [user settings](https://500px.com/settings) and go to the Applications tab.
3) Register a new application, it should look like this:

![Register Application on 500px](public/readme/500px-register-application.png)

4) After you register, you will get a consumer key. Put it in your `server.json` as we'll need it to get photos from 500px.

### Installing Packages

``` bash
npm install
```

### Run Client and Server

``` bash
npm start
```

Visit `http://localhost:3000/` and you should see the main page load.

If there are no photos, make sure you have the `consumerKey` properly setup in the `server.json` file.

## Endpoint API

### GET Popular Photos

> **Endpoint**
>
> http://localhost:3000/api/photos
>
> **CURL Example**
>
> CURL -X GET http://localhost:3000/api/photos

### GET Photo

> **Endpoint**
>
> http://localhost:3000/api/photo/:photoId
>
> **CURL Example**
>
> CURL -X GET http://localhost:3000/api/photos/176698793
>
> **CURL Response**
> ``` json
> {
>     "id":176698793,
>     "user_id":14466859,
>     "name":"Tranquillità",
>     "description":null,
>     "camera":"NIKON D7100",
>     "lens":null,
>     "focal_length":"11",
>     "iso":"100",
>     "shutter_speed":"1/500",
>     "aperture":"8",
>     "times_viewed":16570,
>     "rating":99.9,
>     "status":1,
>     "created_at":"2016-10-09T06:01:25-04:00",
>     "category":8,
>     "location":null,
>     "latitude":null,
>     "longitude":null,
>     "taken_at":null,
>     "hi_res_uploaded":0,
>     "for_sale":false,
>     "width":3500,
>     "height":1797,
>     "votes_count":2662,
>     "favorites_count":0,
>     "comments_count":162,
>     "nsfw":false,
>     "sales_count":0,
>     "for_sale_date":null,
>     "highest_rating":99.9,
>     "highest_rating_date":"2016-10-09T16:26:17-04:00",
>     "license_type":0,
>     "converted":true,
>     "collections_count":154,
>     "crop_version":3,
>     "image_format":"jpeg",
>     "positive_votes_count":2662,
>     "privacy":false,
>     "profile":true,
>     "url":"/photo/176698793/tranquillit%C3%A0-by-anna",
>     "image_url":"https://drscdn.500px.org/photo/176698793/m%3D900_k%3D1_a%3D1/b2bd0d722bbc393d326a7111b1b142da",
>     "images":[
>         {
>             "size":4,
>             "url":"https://drscdn.500px.org/photo/176698793/m%3D900_k%3D1_a%3D1/b2bd0d722bbc393d326a7111b1b142da",
>             "https_url":"https://drscdn.500px.org/photo/176698793/m%3D900_k%3D1_a%3D1/b2bd0d722bbc393d326a7111b1b142da",
>             "format":"jpeg"
>         }
>     ],
>     "store_download":false,
>     "store_print":false,
>     "store_license":false,
>     "request_to_buy_enabled":true,
>     "license_requests_enabled":true,
>     "converted_bits":27,
>     "editors_choice":false,
>     "editors_choice_date":null,
>     "feature":"popular",
>     "feature_date":"2016-10-09T06:04:59-04:00",
>     "editored_by":{
> 
>     },
>     "user":{
>         "id":14466859,
>         "username":"annaovatta58",
>         "firstname":"Anna",
>         "lastname":"",
>         "city":"",
>         "country":"Italia",
>         "usertype":0,
>         "fullname":"Anna",
>         "userpic_url":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/1.jpg?1",
>         "userpic_https_url":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/1.jpg?1",
>         "cover_url":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/cover_2048.jpg?19",
>         "upgrade_status":0,
>         "store_on":true,
>         "affection":273232,
>         "followers_count":9608,
>         "avatars":{
>             "default":{
>                 "https":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/1.jpg?1"
>             },
>             "large":{
>                 "https":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/2.jpg?1"
>             },
>             "small":{
>                 "https":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/3.jpg?1"
>             },
>             "tiny":{
>                 "https":"https://pacdn.500px.org/14466859/b28378c5f71a7e296f1d93b045919b66969de35e/4.jpg?1"
>             }
>         }
>     },
>     "comments":[
> 
>     ],
>     "watermark":false,
>     "licensing_requested":false,
>     "licensing_suggested":false,
>     "is_free_photo":false
> }
> ```