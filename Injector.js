function DeployHack() {
  
};

if (window.location.hostname == 'app.teachermade.com') {
  Consent = prompt('Do you want to use TeacherMade hacks?');
  
  if (Consent == 'No') {
    
  } else {
    if (Consent == 'no') {
      
    } else {
      SheetType = prompt('What type of worksheet is this? (Box or Circle Answers)');
  
  if (SheetType == 'Box') {
    alert('This SheetType hack has not been made yet!');
  } else {
    if (SheetType == 'box') {
      alert('This SheetType hack has not been made yet!');
    } else {
      if (SheetType == 'Circle Answers') {
        alert('This SheetType hack has not been made yet!');
      } else {
        if (SheetType == 'circle answers') {
          alert('This SheetType hack has not been made yet!');
        } else {
          alert('SheetType not found!');
        };
      };
    };
  };
    };
  };
} else {
  alert('You must be at https://app.teachermade.com to use this hack!');
  
  Redirect = prompt('Do you want to be redirected to https://app.teachermade.com?');
  
  if (Redirect == 'No') {
  
  } else {
    if (Redirect == 'no') {
      
    } else {
      V = prompt('What is your url path? (Ex. https://app.teachermade.com/fill/*your code*) -leave blank if none-");
      if (V == nil) {
        window.location.assign('https://app.teachermade.com/accounts/login/');
      } else {
       
       window.location.assign(V);
      };
    };
  };
};
