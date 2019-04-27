# Google App Scripts


## Prerequisite:
1. Google Sheets
2. 

In Google Drive > New Sheet

<img src="#" alt="new sheet" height="42" width="42">

In new spreadsheet 
Goto the menu bar and choose > Insert > Drawing

<img src="#" alt="draw 1" height="42" width="42">



choose **Shapes** and pick a shape for your button

<img src="#" alt="draw 2" height="42" width="42">

Draw your button
<img src="#" alt="draw 3" height="42" width="42">

Click **Save and Close**

Move your button to a desired location. Now open the script editor.\
Menu bar > Tools > Script editor

<img src="#" alt="open script editor" height="42" width="42">


## Button configuration.
You will see the code below. 

```
function myFunction() {
  
}
```

Let's replace this placeholder code with some new code. All we are doing here is displaying a dialog when a button our new button is pressed. 

```
function showMessageBox() {
    Browser.msgBox('You touched me!');
  }
```
You can change the text inside the **msgBox** method _You touched me!_ if you want to see different text. Now save it this and give it a name.\
File > Save\
* Leave the _Script Editor_ open and return to your Google Sheets page where you created the button.  
* Right-Click on the button and then click the 3 dots on the inside the button shape; select **Assign Script**
* In the empty field, type the name of the function we just created: **showMessageBox**

<img src="#" alt="assignScript" height="42" width="42">


* Now you have to Authorize your new script
* Click _Continue_

<img src="#" alt="auth1" height="42" width="42">

* Choose an account and verify the app, click **Allow**

<img src="#" alt="auth2" height="42" width="42">
<img src="#" alt="auth3" height="42" width="42">
<img src="#" alt="auth4" height="42" width="42">

If you don't see your the message box, click your button again.

<img src="#" alt="buttonSciptTest" height="42" width="42">



