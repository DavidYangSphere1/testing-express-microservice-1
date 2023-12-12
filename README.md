This is an example project that tries to use microservice approach for basic Express.js servers.

Problem to Solve: A POC to see a basic folder structure with multiple Express.js servers within a mono-repo.

Folder Structure:
```shell
monolithic-project/
│
├── api-gateway/         # Master Express.js sub-project
│   ├── node_modules/
│   ├── src/
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── microservice-1/      # First microservice
│   ├── node_modules/
│   ├── src/
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── microservice-2/      # Second microservice
│   ├── node_modules/
│   ├── src/
│   │   └── index.js
│   ├── package.json
│   └── ...
│
└── ...                  # More microservices as needed
```

To run it:
- Just make sure that you have `node 16 and above`.
- Do `npm install` inside of each module, since they don't share a `node_modules` folder.
- To run all the microservices:
  - At the root folder, you can simply run:
```shell
npm run start
```
  - This should trigger the `start` command in the package.json file to run all three microservices at once.
- To run only a handful of them:
  - At the desired service directory, you can run:
```shell
cd {service-folder}
npm run start
```
  - You would need to do this in separate terminals, if you wish to run multiple microservices at once.

That's all, folks!