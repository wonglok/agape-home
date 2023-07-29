import { create } from 'zustand'
import { getDone } from './ContainerImplementation'

export const useContainer = create((set, get) => {
  /** @satisfies {import('@webcontainer/api').FileSystemTree} */
  const files = {
    src: {
      directory: {
        'index.js': {
          file: {
            contents: `
import express from 'express';s
const app = express();
const port = 3111;

app.get('/', (req, res) => {
    res.send('Welcome to a WebContainers app! 🥳');
});

app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
});
`,
          },
        },
      },
    },
    'package.json': {
      file: {
        contents: `
{
  "name": "example-app",
  "type": "module",
  "dependencies": {
    "express": "latest",
    "nodemon": "latest"
  },
  "scripts": {
    "start": "nodemon ./src/index.js"
  }
}
          `,
      },
    },
  }

  let operation = getDone({ set, get })
  return {
    activeNode: false,
    activeNodeName: false,
    terminal: false,
    files,
    iFrameSRC: false,
    ...operation,
  }
})
