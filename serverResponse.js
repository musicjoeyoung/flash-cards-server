const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Endpoints</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .endpoint { margin-bottom: 40px; }
        .description { margin-top: 5px; }
        .method { font-weight: bold; }
        .path { font-style: italic; }
        .example { background-color: #f9f9f9; border-left: 5px solid #ccc; padding: 10px; margin-top: 10px; }
    </style>
</head>
<body>
    <h1>Welcome to the CodeCards API!</h1>
    <p>See below for available endpoints and their descriptions.</p>

    <div class="endpoint">
        <div class="method">GET</div>
        <div class="path">/array-methods</div>
        <div class="description">Returns a list of array methods with details. Expect an array of objects, each object detailing a specific array method.</div>
        <div class="example">
            <pre>{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "concat",
            "description": "Used to merge two or more arrays.",
            "example": "array1.concat(array2)"
        }
        ...
    ]
}</pre>
        </div>
    </div>

    <div class="endpoint">
        <div class="method">GET</div>
        <div class="path">/object-methods</div>
        <div class="description">Provides a collection of object methods. The response is an array of objects, with each object containing information about a specific object method.</div>
        <div class="example">
            <pre>{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Object.assign()",
            "description": "Used to copy the values of all enumerable own properties from one or more source objects to a target object.",
            "example": "Object.assign(target, ...sources)"
        }
        ...
    ]
}</pre>
        </div>
    </div>
</body>
</html>
    `;

export default htmlResponse;