
### tags - react, documentation

# Description
React-hot-doc is a documentation framework for react with the purpose of providing both the source and a rendered component. The source can be edited on the fly, which will dynamically update the rendered component


# Installation

```
npm install @nsumikawa/react-hot-doc
```

# Example

```
import ReactHotDocs from '@nsumikawa/react_hot_docs'

import * as REACT from 'react'
import * as SUIR from 'semantic-ui-react'

const imports = {
  'react': REACT,
  'semantic-ui-react': SUIR,
}


function App() {

  const config = [
     {
       "title": "Example 1",
       "page": "example",
       "description": "This is a description file",
       "path": "./doc/file.jse"
     },
     {
       "title": "Example 2",
       "page": "example",
       "description": "This is a description file2",
       "path": "./doc/file.jse"
     },
     {
       "title": "TestExample",
       "page": "Test",
       "description": "This is description of Test",
       "path": "./doc/file.jse"
     }
   ]

  return (
    <div className="App">
      <ReactHotDocs
        config={config}
        resolver = {(path) => imports[path]}
        import={(val) => import(`${val}`)}/>

    </div>
  );
}

```  




# Parameters
- **config**:  an array of objects containing information on the files to import. See [Configuration](##Configuration) for more information

- **resolver**: an object containing the mapping for all libraries used throughout the code

- **import**: The import function must be supplied as following **(val) => import(`${val}`)** in order to read in the locally stored files.


## Configuration Parameters
- **title**: Title rendered at the top of the example

- **page**: The page/tab to include the example. This is useful to help best organize your code.

- **description**: A brief description of the example (not required)
-
- **path**: relative path to the example file.  



> Written with [StackEdit](https://stackedit.io/).
