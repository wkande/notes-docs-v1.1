get_user_tags = async () => {
  const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token")
    }
  };
  start('get_user_tags');
  setTimeout(function(){
    executeIt('/tags', settings, 'get_user_tags');
  }, 500);
}


update_a_tag = async () => {
  // Prompts
  const msg = 'Please enter the old tag to update.';
  var tag_old = prompt(msg);
  if(tag_old === null) return;
  else if(tag_old.trim() === ''){
    showMsg('update_a_tag', msg);
    return;
  }
  const msg2 = 'Please enter the new (replacement) tag.';
  var tag_new = prompt(msg2);
  if(tag_new === null) return;
  else if(tag_new.trim() === ''){
    showMsg('update_a_tag', msg2);
    return;
  }

  // API
  const settings = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: 'application/json',
        Authorization: 'Bearer '+localStorage.getItem("token")
    },
    body: 'tag='+tag_new
  };
  start('update_a_tag');
  setTimeout(function(){
    executeIt('/tag/'+tag_old, settings, 'update_a_tag');
  }, 500);
}


delete_a_tag = async () => {
  // Prompt
  const msg = "Please enter a tag to delete from all of your notes.";
  var tag = prompt(msg);
  if(tag === null) return;
  else if(tag.trim() === ''){
    showMsg('delete_a_tag', msg);
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
    start('delete_a_tag');
    setTimeout(function(){
      executeIt('/tag/'+tag, settings, 'delete_a_tag');
    }, 500);
  }
}
