import { test } from '@playwright/test';
import ENV from '../utils/env';

test('Diverse environments', async ({}) => {


  console.log(`This is SPARTA: ${process.env.username}`);



    //const username = process.env.npm_config_username ? process.env.npm_config_username : "Eddie";

    const username = process.env.npm_config_username;
    const password = process.env.npm_config_password;

  console.log("Hello", username);
  console.log("Your pass is: ", password);



  console.log(`This is base URL: ${ENV.BASE_URL}`);
  //console.log(`This is username: ${ENV.USERNAME}`);
  console.log(`This is password: ${ENV.PASSWORD}`);


});