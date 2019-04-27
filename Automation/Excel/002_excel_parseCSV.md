# Parse CSV file

[Instructions-from-Home_and_Learn](http://www.homeandlearn.org/open_a_text_file_in_vba.html)
## Start coding
In Excel, create a new blank workbook. Click the A column and format it as Text. This is because our ISBN is in the number format in the text file.

Now open up your VBA Editor to get at the coding window. Create a new Sub and call it OpenTextFile. As the first line of your code, add the following:

## Open File
To open a file, you start with the word Open. You then specify a File Name, a Mode, and a File Number.
```
Open FileName For Mode As FileNumber
```
The Mode above should be replaced by one of the following:
* Append - used for adding data to an already existing file
* Output - used to write to a file
* Input - used to read a file
* Binary - used to read or write data in byte format
* Random - used to place characters in a buffer of a set size

The FileNumber can be any number between 1 and 511. You precede the number with the # character. So if you're opening one file you'd have #1. If you open up a second, different file it would be #2, and so on.\
So add this line to your code:
```
Open FilePath For Input As #1
```
The next line is to set a variable for row numbers. We'll use this for the ActiveCell on the spreadsheet:\
```
row_number = 0
```
The way you normally do something with a file is to loop round, grabbing each line as you go. We'll use a Do Until loop for this:
```
Do Until EOF(1)
Loop
```
Inside of the loop, we first have this somewhat complex line:
```
Line Input #1, LineFromFile
```
The first three items before the comma refer to a single line of input from your file number (#1).\
After the comma, you tell VBA where you want to place this line. This will be a variable.\
We've called ours `LineFromFile`. Every time round the loop, a new line will be grabbed from the text file and placed in this variable.

You need to parse the lines from your text file in some way. A good way to parse a line is with the Split function you met earlier. By using Split, you can place each item from a line into an array:
```
LineItems = Split(LineFromFile, ",")
```
Between the round brackets of Split, we have the variable we want to split, which is LineFromFile. After a comma, we have the separator we want to look for. The separator is the comma, for us.

When Split has finished, we'll have an array called LineItems. Our text file always has three items per line (first name, last name, ISBN). So we know the array goes from 0 to 2 positions. We can now go ahead and place each item into a cell on the spreadsheet:
```
ActiveCell.Offset(row_number, 0).Value = LineItems(2)
ActiveCell.Offset(row_number, 1).Value = LineItems(1)
ActiveCell.Offset(row_number, 2).Value = LineItems(0)
```
Between the round brackets of Offset we have the row number and the column number. We're using the variable called row_number for the rows. We set this to 0 earlier. (We'll increment this variable shortly). The columns are always offset at 0, 1 and 2. A value of 0, remember, keeps you in the same column. A value of 1 moves you 1 column over, and a value of 2 moves you 2 columns over from the ActiveCell.

To the right of the equal sign, we have our LineItems array. Because we want the ISBN in the A column, we've used LineItems(2) as the first value after the equal sign. We next have LineItems(1), which will get us the last name in the B column. Finally, we have LineItems(0), which will get us the first name in the C column.

The final thing to do inside of the loop is to increment the row_number variable, otherwise we'll be stuck on the first row of the spreadsheet.
```
row_number = row_number + 1
```
When you open a file, you should close it somewhere in your code. This is fairly straightforward:
```
Close #1
```
You type the word Close and then, after a space, the file number you're trying to close.

**Code below** works but there it must be run from the VBA screen\A button or another function should call it. 
```
Sub OpenTextFile()
    Dim FilePath As String
    FilePath = "C:\Users\MarkCameron\Documents\Excel_jenkins_modulesCheck\authors.csv"
    row_number = 0
    
    Open FilePath For Input As #1

    Do Until EOF(1)
    
    Line Input #1, LineFromFile
    LineItems = Split(LineFromFile, ",")
    
    ActiveCell.Offset(row_number, 0).Value = LineItems(2)
    ActiveCell.Offset(row_number, 1).Value = LineItems(1)
    ActiveCell.Offset(row_number, 2).Value = LineItems(0)
    
    row_number = row_number + 1
    
    Loop
    
    Close #1


End Sub

```