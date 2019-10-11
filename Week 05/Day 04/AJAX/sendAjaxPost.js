function ajaxPost (form) {
  var url = form.action,
      xhr = new XMLHttpRequest();
  
  var params = [].filter.call(form.elements, function (el) {return (el.type != 'checkbox' && el.type != 'radio') || el.checked;})
       .filter(function(el) { return !!el.name; }) //Nameless elements die.
       .filter(function(el) { return !el.disabled; }) //Disabled elements die.
       .map(function(el) {
          return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
       }).join('&').replace("ajax=0","ajax=1");	
      
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  //.bind ensures that this inside of the function is the XHR object.
 // xhr.onload = callback.bind(xhr); 
  
  xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState === 4 && xhr.status === 200) {
      try {
        var response = JSON.parse(xhr.responseText);
        if (response.status == 'success') {
          var temp = '<h3>'+response.msg+'</h3>';
          console.log(temp);	        
        } else if (response.status == 'error') {
          if(typeof response.input === 'undefined'){
            //undefined error					      
            var temp = '<h3>'+response.msg+'</h3>';
            console.log(temp);			      			
          } else {
            //highlight error fields in form
            var p = response.input;
            for (var key in p) {			
              if (p.hasOwnProperty(key)) {
              addClass(document.querySelector('[name='+key+']'),'error');
              }
            }
          }
        }
      } catch(e) {
        var response = xhr.responseText;
        var temp = document.createElement("div");
          temp.innerHTML = response;
          if(temp.querySelector('form')){
          form.innerHTML = temp.querySelector('form').innerHTML;	
        }
      }
    }
  }
  //All preperations are clear, send the request!
  xhr.send(params);
}