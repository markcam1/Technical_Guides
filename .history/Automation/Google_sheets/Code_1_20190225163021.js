

function showMessageBox() {
    Browser.msgBox('You clicked it!');
    getWebsite();
   
  }
  
  function getWebsite() {
    
    var attName = '';
    var attValue = '';
    
    // The code below logs the HTML code of the Google home page.
    //var response = UrlFetchApp.fetch("https://example.com/");
    
    var options = {};
    options.headers = {"Authorization": "Basic " + Utilities.base64Encode("mark_cameron@calypso.com" + ":" + "00f3ar!xB")};
  
    //var response = UrlFetchApp.fetch("https://arij.calypso.com//rest/api/2/filter/34860", options);
    var response = UrlFetchApp.fetch("https://jira.calypso.com//rest/api/2/project/CAL/versions", options);
    //Logger.log(response.getContentText());
    
    var fact = response.getContentText();
    var newData = JSON.parse(fact);
    var obj = newData;
    var MCarr = [];
    counter = 0;  
  
    
      for (var key in obj){
        attName = key;
        attValue = obj[key];
        fVersion = attValue.name;
        

        // var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        // var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
        // var cell = sheet.getRange(counter+1,1,1,1);
        
        if(fVersion == "PROMOTION.16.1"){
          var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
          var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
          var cell = sheet.getRange(1,1,1,1);
          cell.setValue(attValue);
        } 
        
        
        Logger.log(fVersion);

        
        //MCarr.push(attValue);
       
        counter++;
        
      }
  
  }
  
  //function populateSheet (arrValue){
  //  
  //  var jiraArr = arrValue;
  //  
  //  
  //  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //  var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
  //  //var sheet = SpreadsheetApp.getActiveSheet();  
  //  //var sheet = SpreadsheetApp.getActiveSheet();
  //  var cell = sheet.getRange(1,1,1,jiraArr.length);
  //  cell.setValues([jiraArr]);
  //  
  //  
  //}