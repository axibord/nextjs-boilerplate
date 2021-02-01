## Boilerplate for React projects.

Next.js boilerplate using Typescript built on top of create-next-app<br/>
## Get started

### Features
* Uses Typescript
* Support for tailwindcssv2
* Eslint with Airbnb style and configured for Typescript
### For development

1. `git clone` the repository to your local machine
2. run `npm install` to install all the dependencies
3. run `npm run dev` to start local development server

### For production

For production use `npm run build` then `npm run start` to run the build, but before we need to **purge** all tailwind css propreties that we didn't use in the project. To do so follow theses instructions:

1. Inside `tailwind.config.js` be sure to have `purge: {enabled: true}` as it will make a big difference in build size
2. now you can run `npm run build` then `npm run start` to run the build
