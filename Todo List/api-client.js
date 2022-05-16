const apiUrl = "http://localhost:3000";
const idNumber = "3c1096b3-1919-4c45-9b0a-0ad012c424b3";

console.log("Hey I'm Farid Attamimi"); // Test Api


     // GET
const getTodoList = async () => {
    const result = {
        method: "GET",
        headers: {
            "content-Type": "application/json",
        }
    };
    try {
        const res = await fetch(apiUrl, result);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}
      // Post
const postTodo = async () => {
    const todo = document.getElementById("input-description").value;
    const addTodo = {description: todo, done: false};
        const result = {
            method: "POST",
            body: JSON.stringify(addTodo),
            headers: {
                "content-Type": "application/json"
            }
        };
        try {
            const res = await fetch(apiUrl, result);
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err);
        }
}
               // PUT
const contentTodo = async idNumber => {
    const data = {done: true};
    const result = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    };
    try {
        const res = await fetch(`http://localhost:3000/${idNumber}`, result);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}


const dataTodo = async idNumber => {
    const update = prompt("change your todo:");
    const data = { description: update };
    const result = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const res = await fetch(`http://localhost:3000/${idNumber}`, result);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
}

      // DELETE
      const deleteTodo = async idNumber => {
        const array = await getTodoList();
        const result = {
            method: "DELETE"
        }
        try {
            const res = await fetch(`http://localhost:3000/${idNumber}`, result);
            const json = await res.json();
            return json;
        } catch (err) {
            console.log(err);
        }
    }
    

      /*
const deleteTodo = async (idNumber) => {
    try {
        let deleteTask = await fetch(apiUrl + idNumber, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
        });
        let response = await deleteTask.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}
const deleteAll = async () => {
    try {
        await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log("all Tasks Deleted");
    } catch (err) {
        console.log(err);
    }
}
*/