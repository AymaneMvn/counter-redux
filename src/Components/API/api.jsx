import React from 'react'
import axios from "axios";


function api() {

const options = {
  method: 'GET',
  url: 'https://youtube-to-mp4.p.rapidapi.com/url=&title',
  params: {
    url: 'https://www.youtube.com/watch?v=IfNB5RTxnhI',
    title: 'Call of Duty : Modern Warfare 2 Remastered - All Weapon Reload Animations in 4 Minutes'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'youtube-to-mp4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <div>HELLO</div>
  )
}

export default api