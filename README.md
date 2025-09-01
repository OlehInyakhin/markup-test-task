# 📦 Getting started

Run the following commands:<br>

Install dependencies:
```shell
npm i
```

Once the dependencies are installed, you can use any of the available build commands. The resulting files will be placed in the `app` folder in the root directory:

```shell
 npm run
```

The base command that starts the build process for development.

```shell
 npm run build
```

Builds the project, optimizing and compressing all files for hosting.

```shell
 npm run cache
```

Run this command after gulp build if you need to upload new files to the hosting without using caching.

```shell
 npm run backend
```

Builds the backend part of the project. This build contains only the necessary elements and is not compressed, making it convenient for backend development.

```shell
 npm run zip
```

Packs your finished code into a zip archive.

```shell
 npm run deploy
```
