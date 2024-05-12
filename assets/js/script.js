function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();
    
    var ageYear = now.getFullYear() - dob.getFullYear();
    var ageMonth = now.getMonth() - dob.getMonth();
    var ageDay = now.getDate() - dob.getDate();
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth = 12 + ageMonth;
    }
  
    if (ageDay < 0) {
      var tempDate = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
      if (now.getMonth() === 0 && dob.getMonth() === 11) {
        tempDate = new Date(now.getFullYear() - 1, dob.getMonth(), dob.getDate());
      }
      ageDay = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));
      ageMonth--;
    }
  
    document.getElementById('result').innerHTML = "You are " + ageYear + " years, " + ageMonth + " months & " + ageDay + " days old.";
  }
 
  