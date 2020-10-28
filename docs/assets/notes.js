
get_user_notes = async () => {
  const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token")
    }
  };
  start('get_user_notes');
  setTimeout(function(){
    executeIt('/notes', settings, 'get_user_notes');
  }, 500);
}


get_a_note = async () => {
  // Prompts
  var id = prompt("Please enter a note ID.", localStorage.getItem("note_id") || "");
  if(id === null) return;
  else if(id.trim() === ''){
    showMsg('get_a_note', 'Please enter a note ID.');
    return;
  }

  // API
  const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token")
    }
  };
  start('get_a_note');
  setTimeout(function(){
    executeIt('/note/'+id.trim(), settings, 'get_a_note');
  }, 500);
}


create_a_note = async () => {
  // Prompts
  var content = prompt("Please enter some note content.");
  if(content === null) return;
  else if(content.trim() === ''){
    showMsg('create_a_note', 'Please enter some note content.');
    return;
  }
  var tags = prompt("Please enter tags (optional).");
  if(tags === null) return;
  // empty tags are OK

  // API
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'content='+content+'&tags='+tags
  };
  start('create_a_note');
  setTimeout(function(){
    executeIt('/note', settings, 'create_a_note');
  }, 500);
}


update_a_note = async () => {
  // Prompts
  var id = prompt("Please enter a note ID.",localStorage.getItem("note_id") || "");
  if(id === null) return;
  else if(id.trim() === ''){
    showMsg('get_a_note', 'Please enter a note ID.');
    return;
  }

  // Get the note
  let note;
  try{
    const settings = {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          Authorization: 'Bearer '+localStorage.getItem("token")
      }
    };
    const res = await fetch(base_url+'/note/'+id, settings);
    data = await res.json();
    console.log('res.status', res.status);
    if(res.status == 400){
      document.getElementById('update_a_note_status').innerText = 'Error: invalid note ID: '+id;
      document.getElementById('update_a_note_data').innerHTML = prettyPrintJson.toHtml(data);
      return;
    }
    else if (res.status != 200){
      document.getElementById('update_a_note_status').innerText = 'Error: invalid note ID: '+id;
      document.getElementById('update_a_note_data').innerHTML = prettyPrintJson.toHtml(data);
      return;
    }
  }
  catch(err){
    document.getElementById('update_a_note_status').innerText = 'Error.';
    document.getElementById('update_a_note_data').innerHTML = prettyPrintJson.toHtml(err.toString());
    return;
  }

  // More propmpts
  var content = prompt("Please enter some note content.", data.content || "");
  if(content === null) return;
  else if(content.trim() === ''){
    showMsg('update_a_note', 'Please enter some note content.');
    return;
  }
  var tags = prompt("Please enter tags (optional).", data.tags || "");
  if(tags === null) return;
  // empty tags are OK

  // API
  const settings = {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'content='+content+'&tags='+tags
  };
  start('update_a_note');
  setTimeout(function(){
    executeIt('/note/'+data.id, settings, 'update_a_note');
  }, 500);
}


delete_a_note = async () => {
  // Prompts
  var id = prompt("Please enter a note ID to delete.",localStorage.getItem("note_id") || "");
  if(id === null) return;
  else if(id.trim() === ''){
    showMsg('get_a_note', 'Please enter a note ID.');
    return;
  }
  // Confirm
  var conf = confirm("Are you sure?");
  if (conf == true) {
    // API
    const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          Authorization: 'Bearer '+localStorage.getItem("token")
      }
    };
    start('delete_a_note');
    setTimeout(function(){
      executeIt('/note/'+id, settings, 'delete_a_note');
    }, 500);
  }
}


delete_user_notes = async () => {
  // Confirm
  var conf = confirm("Delete all your notes. Are you sure?");
  if (conf == true) {
    // API
    const settings = {
      method: 'DELETE',
      headers: {
          Accept: 'application/json',
          Authorization: 'Bearer '+localStorage.getItem("token")
      }
    };
    start('delete_user_notes');
    setTimeout(function(){
      executeIt('/notes', settings, 'delete_user_notes');
    }, 500);
  }
}

remove_note_tags = async () => {
  // Prompts
  const msg = 'Please enter a note ID to remove its tags.';
  var id = prompt(msg, localStorage.getItem("note_id") || "");
  if(id === null) return;
  else if(id.trim() === ''){
    showMsg('remove_note_tags', msg);
    return;
  }
  // Confirm
  var conf = confirm("Are you sure?");
  if (conf == true) {
    // API
    const settings = {
      method: 'PATCH',
      headers: {
          Accept: 'application/json',
          Authorization: 'Bearer '+localStorage.getItem("token")
      }
    };
    start('remove_note_tags');
    setTimeout(function(){
      executeIt('/note/'+id+'/tags', settings, 'remove_note_tags');
    }, 500);
  }
}