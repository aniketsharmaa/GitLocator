async function getData() {
  const data = document.getElementById('inputvalue');

  var userName = data.value;
  // TODO:Instead of this alert, use input error. Search in google about how to show error in the input field
  if (!data.value) {
    alert('Enter Gihub Username');
    return;
  }
  var ApiUrl = 'https://api.github.com/users/' + userName;
  // console.log(ApiUrl)

  const value = await fetch(ApiUrl);
  const response = await value.json();

  // FIXME: above fetch function can be also written as follows
  // async function fetchData() {
  //   try {
  //     const val = await fetch(ApiUrl)
  //       .then((res) => res.json())
  //       .catch((err) => console.log(err.message));
  //       return val;
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  // call the function wherever required
  // fetchData();

  console.log(response);
  const locationElement = document.querySelector('.locationId');
  if (response.message) {
    response.location = '(Not Available)';
  }
  locationElement.textContent = response.location;
}
// getData()
