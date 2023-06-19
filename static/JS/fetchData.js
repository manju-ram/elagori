fetch("/dodata")  // Replace the URL with the desired data source
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function(data) {
    // Process the retrieved data
    console.log(data);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });
