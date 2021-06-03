# get-live-count

The purpose of using this package is to show the live user count on the current app. It uses socket.io package for managing the live user count.

### Usage
install the socket.io package

```
    npm i socket.io
```

or add CDN link for it
```
<script src="https://cdn.socket.io/4.0.0/socket.io.min.js" integrity="sha384-DkkWv9oJFWLIydBXXjkBWnG1/fuVhw8YPBq37uvvD6WSYRFRqr21eY5Dg9ZhmWdy" crossorigin="anonymous"></script>
```

go to user root component and inside the useEffect hook add call this function

```
import React from 'react';
import getLiveCount from 'liveusercount'
const RootComponent = () => {
    React.useEffect(() =>{
        getLiveCount();
    }, []);
    return (
        <div></div>
    );
};

export default RootComponent;

```

it will automatically generate the section for the live count on the top left of the page

