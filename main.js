'use strict';


{
  // JavaScript fetch API編#1
  function showHeader(){
    console.log('Header');
  }

  // async function showUsers() {
  //   try {
  //     const response = await fetch('https://dotinstall.github.io/setup/fetchapi/invalid-users.json');
  //     const users = await response.json();
  //     console.log(users);
  //   } catch(err) {
  //     console.log('Something went wrong getting user data');
  //     console.log('Erro log: ' + err);
  //   }
  // }

  // const showUsers = async() => {
  //   try {
  //     const response = await fetch('https://dotinstall.github.io/setup/fetchapi/users.json');
  //     const users = await response.json();
  //     console.log(users);
  //   } catch(err) {
  //     console.log('Something went wrong getting user data');
  //     console.log('Erro log: ' + err);
  //   }
  // }

  function showUsers() {
    fetch('https://dotinstall.github.io/setup/fetchapi/users.json')
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log('Something went wrong getting user data');
      console.log('Erro log: ' + err);
    })
  }

  function showFooter() {
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();
}