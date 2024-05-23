# Image url to PNG - API

ExpressJS API to **convert any image url to PNG**

## Installation

Run this command:
`npm install`

## Usage

Run this command:
`node index.js`

Copy your image url and put in the image_url query parameter:

`http://localhost:3000/api/images/convert-to-png?image_url={{image_url}}`

e.g.: http://localhost:3000/api/images/convert-to-png?image_url=https://thispersondoesnotexist.com

The **response will be a image/png**