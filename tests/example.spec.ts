import { test } from '@playwright/test';
import ENV from '../utils/env';

test('Diverse environments', async ({}) => {


  console.log(`This is SPARTA: ${process.env.username}`);



    const username = process.env.npm_config_username ? process.env.npm_config_username : "Eddie";

  console.log("Hello", username);



  console.log(`This is base URL: ${ENV.BASE_URL}`);
  //console.log(`This is username: ${ENV.USERNAME}`);
  console.log(`This is password: ${ENV.PASSWORD}`);


});