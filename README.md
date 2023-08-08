# Keep Active

keep active to prevent cold starts for your nodejs express apps
hosted on free plan for render.com or heroku.com or any
other cloud provider

## Usage

```.sh

import express from "express"
import { keepActiveController } = from "keep-apps-active";

const app = express();

// Other app configuration

keepActiveController(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Installation

```.sh

npm install @types/keep-apps-active

```
