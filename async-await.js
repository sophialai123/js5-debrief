// Selecting page elements
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");



// AJAX funtions
const getData = async () => {

  try {
    // get request
    const response = await fetch('https://reqres.in/api/users?page=2')
    if (response.ok) {

      // need to use await keyword for
      const jsonResponse = await response.json();
      console.log(jsonResponse)

    } else {
      throw new Error(error)
    }
  } catch (error) {
    console.log(error.message)
  }
}

getData()



const sendData = async () => {

  try {
    // post request
    const response = await fetch('https://reqres.in/api/users?page=2', {
      method: 'POST',
      body: JSON.stringify({ name: 'morpheus', job: 'leader' }),
      headers: { 'Content-type': 'application/json' }
    })

    if (response.ok) {
      // need to use await keyword for
      const jsonResponse = await response.json();
      console.log(jsonResponse)
      return jsonResponse
    }

    throw new Error(error)
  }
  catch (error) {
    console.log(error.message)
  }

}

// Buttons eventListeners
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
