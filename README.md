
# Welcome to the CodeCards API!

  

See below for available endpoints and their descriptions.

  

---


### `GET /array-methods`

  

Returns a list of array methods with details. Expect an array of objects, each object detailing a specific array method.

  

Example response:

    {
	    "success":true,
	    "data": [
		    {
			    "id": 1,
			    "name": "concat",
			    "description": "Used to merge two or more arrays.",
			    "example": "array1.concat(array2)"
		    }
		    ...
	    ]
	}

  

---

  

### `GET /object-methods`

  

Provides a collection of object methods. The response is an array of objects, with each object containing information about a specific object method.

  

Example response:

    {
	    "success":true,
	    "data": [
		    {
			    "id": 1,
			    "name": "Object.assign()",
			    "description": "Used to copy the values of all enumerable own properties from one or more source objects to a target object.",
			    "example": "Object.assign(target, ...sources)"
		    }
		    ...
	    ]
	}
    

