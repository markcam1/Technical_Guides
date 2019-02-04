
## Developer tab
1. Right click anywhere on the ribbon, and then click Customize the Ribbon.
2. Under Customize the Ribbon, on the right side of the dialog box, select Main tabs (if necessary).
3. Check the Developer check box.
4. Click OK.
5. You can find the Developer tab next to the View tab.

## Form controls
1. In **Developer** tab, Open _Visual Basic_ window
2. Insert > **Module**
3. In new code window that appears type 
`Sub SomeFoo()`
1. After the **Sub** and before the **End** type 
`Msgbox = "Jello World"`
1. create Forms control button

Button
1. In **Developer** tab, Open _Insert_ window
2. Select the box on the top left under _Forms_ ribbon
3. Place button box in your spreadsheet
4. Right-click assign macro created above "SomeFoo"; (make sure Design Mode is deselected)

---

## ActiveX
To place a command button on your worksheet, execute the following steps.
1. On the Developer tab, click Insert.
2. In the ActiveX Controls group, click Command Button.
Insert a command button control
3. Drag a command button on your worksheet.

To assign a macro (one or more code lines) to the command button, execute the following steps.
1. Right click CommandButton1 (make sure Design Mode is selected).
2. Click View Code.
The Visual Basic Editor appears.
3. Place your cursor between Private Sub CommandButton1_Click() and End Sub.
4. Add the code line shown below.
`Range("A1").Value = "Hello world"`
5. Close the Visual Basic Editor.
6. Click the command button on the sheet (make sure Design Mode is deselected).
---
# Download a file from url
## Code
Hello World example
```
Sub SayHello()
    Range("A1").Value = "jello"
    MsgBox "Jello world"
End Sub
```
This is how we Download file
```
Sub JenkGetter()

Dim xmlhttp As New MSXML2.XMLHTTP60, myurl As String
myurl = "https://postb.in/eYnRlOUq"
xmlhttp.Open "GET", myurl, False
user = "username@domain.com"
Password = "your_password"
xmlhttp.setRequestHeader "Authorization", "Basic " + Base64Encode(user + ":" + Password)
xmlhttp.send
MsgBox (xmlhttp.responseText)



myurl = xmlhttp.responseBody
If xmlhttp.Status = 200 Then
    Set oStrm = CreateObject("ADODB.Stream")
    oStrm.Open
    oStrm.Type = 1
    oStrm.Write xmlhttp.responseBody
    oStrm.SaveToFile ThisWorkbook.Path & "\" & "file_postbin.csv", 2 ' 1 = no overwrite, 2 = overwrite
    oStrm.Close
End If

End Sub
```
Below is how we send [base64](https://en.wikipedia.org/wiki/Base64) encoded Username/password
This section can be merged with the "Download File from Url" section above
```
Function Base64Encode(sText)
    Dim oXML, oNode
    Set oXML = CreateObject("Msxml2.DOMDocument.3.0")
    Set oNode = oXML.createElement("base64")
    oNode.DataType = "bin.base64"
    oNode.nodeTypedValue = Stream_StringToBinary(sText)
    Base64Encode = oNode.Text
    Set oNode = Nothing
    Set oXML = Nothing
End Function


'Stream_StringToBinary Function
'2003 Antonin Foller, http://www.motobit.com
'Text - string parameter To convert To binary data
Function Stream_StringToBinary(Text)
  Const adTypeText = 2
  Const adTypeBinary = 1

  'Create Stream object
  Dim BinaryStream 'As New Stream
  Set BinaryStream = CreateObject("ADODB.Stream")

  'Specify stream type - we want To save text/string data.
  BinaryStream.Type = adTypeText

  'Specify charset For the source text (unicode) data.
  BinaryStream.Charset = "us-ascii"

  'Open the stream And write text/string data To the object
  BinaryStream.Open
  BinaryStream.WriteText Text

  'Change stream type To binary
  BinaryStream.Position = 0
  BinaryStream.Type = adTypeBinary

  'Ignore first two bytes - sign of
  BinaryStream.Position = 0

  'Open the stream And get binary data from the object
  Stream_StringToBinary = BinaryStream.Read

  Set BinaryStream = Nothing
End Function

'Stream_BinaryToString Function
'2003 Antonin Foller, http://www.motobit.com
'Binary - VT_UI1 | VT_ARRAY data To convert To a string
Function Stream_BinaryToString(Binary)
  Const adTypeText = 2
  Const adTypeBinary = 1

  'Create Stream object
  Dim BinaryStream 'As New Stream
  Set BinaryStream = CreateObject("ADODB.Stream")

  'Specify stream type - we want To save text/string data.
  BinaryStream.Type = adTypeBinary

  'Open the stream And write text/string data To the object
  BinaryStream.Open
  BinaryStream.Write Binary

  'Change stream type To binary
  BinaryStream.Position = 0
  BinaryStream.Type = adTypeText

  'Specify charset For the source text (unicode) data.
  BinaryStream.Charset = "us-ascii"

  'Open the stream And get binary data from the object
  Stream_BinaryToString = BinaryStream.ReadText
  Set BinaryStream = Nothing
End Function
```

