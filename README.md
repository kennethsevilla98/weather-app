## Getting Started

clone repository then checkout to develop

```bash
https://github.com/kennethsevilla98/weather-app.git
or
git@github.com:kennethsevilla98/weather-app.git


git checkout develop
```

First, rename the env.local.sample to .env.local and add all key needed

.env.local

```bash
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://{yourDomain}'
AUTH0_CLIENT_ID='{yourClientId}'
AUTH0_CLIENT_SECRET='{yourClientSecret}'

NEXT_PUBLIC_API_BASE_URL = 'http://api.openweathermap.org'
APP_ID = {API_KEY of open weather}
```

install all dependencies

```bash
npm install
```

run app

```bash
npm run dev
```

or

```bash
npm run build
npm run start
```
