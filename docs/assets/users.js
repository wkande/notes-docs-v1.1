/**
 * Variables used by the TRY ME buttons
 */
const base_url = 'https://docs-as-code.herokuapp.com';
//const base_url = 'http://localhost:3001';

function start(id){
  // Must use visibility for the spinner
  document.getElementById(id+'_spinner').style["visibility"] = 'visible';
  document.getElementById(id+'_button').disabled = true;
  document.getElementById(id+'_button').style.opacity = 0.2;
}

function showMsg(id, msg){
  document.getElementById(id+'_status').innerText = msg;
  document.getElementById(id+'_status').style["display"] = 'inline';
  
  document.getElementById(id+'_closebox').style["display"] = 'inline';
}


function completed(id){
  document.getElementById(id+'_spinner').style["visibility"] = 'hidden';
  document.getElementById(id+'_button').disabled = false;
  document.getElementById(id+'_button').style.opacity = 0.6;
  document.getElementById(id+'_status').style["display"] = 'inline';
  document.getElementById(id+'_closebox').style["display"] = 'inline';
  // Must use inline-block for the data
  document.getElementById(id+'_data').style["display"] = 'inline-block';
}


function close(id){
  document.getElementById(id+'_spinner').style["visibility"] = 'hidden';
  document.getElementById(id+'_data').style["display"] = 'none';
  document.getElementById(id+'_closebox').style["display"] = 'none';
  document.getElementById(id+'_status').style["display"] = 'none';
}


executeIt = async (url, settings, prefix) => {
  // Clear display
  let status = document.getElementById(prefix+"_status");
  let elem = document.getElementById(prefix+"_data");
  elem.innerHTML = null; status.innerText = null;
  // API
  try{
    const res = await fetch(base_url+url, settings);
    console.log(res);
    
    // May not be JSON, 204 No Content
    var data;
    try {
      data = await res.json();
    }
    catch(err){
      data = res.body;
    } // If err then data is undefined

    console.log('data', data)
    status.innerText = res.status+' - '+res.statusText;
    if(res.status != 204){
      elem.innerHTML = prettyPrintJson.toHtml(data);
    }
    else if(res.status == 204){
      elem.innerHTML = "Deleted";
    }
    
    // Store note ID  to LocalStorage
    if(res.status != 204 && data.id){
      localStorage.setItem("note_id", data.id);
    }

    // Store token to LocalStorage
    if(res.status == 200 && data.token){
      localStorage.setItem("token", data.token);
    }

  }
  catch(err){
    console.error(err);
    status.innerText = 'Error';
    elem.innerHTML = prettyPrintJson.toHtml(err.toString());
  }
  completed(prefix);
}


create_a_code = async () => {
  // Prompts
  var email = prompt("Please enter your email address.\nA code will be sent to you.", localStorage.getItem('email') || '');
  console.log('email:', email)
  if(email === null) return;
  else if(email.trim() === '')
  {
    showMsg('create_a_code', 'Please enter your email address.');
    return;
  }
  //API
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'email='+email
  };
  localStorage.setItem('email', email);
  start('create_a_code');
  setTimeout(function(){
    executeIt('/user/code', settings, 'create_a_code');
  }, 500);
}


get_a_token = async () => {
  // Prompts
  var code = prompt("Please enter the code sent to your email address.");
  if(code === null) return;
  else if(code.trim() === ''){
    showMsg('get_a_token', 'Please enter the code we sent to your email address.');
    return;
  }
  var email = prompt("Please enter your email address.", localStorage.getItem('email'));
  if(email === null) return;
  else if(email.trim() === '')
  {
    showMsg('get_a_token', 'Please enter your email address.');
    return;
  }
  // API
  const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
  };
  start('get_a_token');
  setTimeout(function(){
    executeIt('/user/token?email='+email+'&code='+code, settings, 'get_a_token');
  }, 500);
}


get_current_user = async () => {
  const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token")
    }
  };
  start('get_current_user');
  setTimeout(function(){
    executeIt('/user', settings, 'get_current_user');
  }, 500);
}