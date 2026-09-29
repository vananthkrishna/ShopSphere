export function createUser(){

  const timestamp=Date.now();

  return{

    name:'Ananth',

    email:`ananth${timestamp}@test.com`,

    password:'Password123'

  };

}