# Using Bash to download URL and Parse

## Config
You may need to install _wget_ in Git-Bash
[Add-Git-Bash_on_Windows](https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058)

### bash code

```bash
#!/bin/sh

# mark cameron 
# shell script to download jenkins module file and format for distribution

DIR=/c/work/Bash_jenkins_modules

# output file
FILE=testfile.txt

# wget log 
LOGFILE=wget.log

# download url
URL=https://example.com/

# actions
cd $DIR

```



---
##Parse File
We use the AWK program to parse the file
```
awk '{print $1, $6, $11}' file_postbin.csv 
```

Prints [split](https://www.gnu.org/software/gawk/manual/html_node/String-Functions.html) arrays

---
The split() function splits strings into pieces in a manner similar to the way input lines are split into fields. For example: 
split("cul-de-sac", a, "-", seps)
splits the string "cul-de-sac" into three fields using ‘-’ as the separator. It sets the contents of the array a as follows: 
```
a[1] = "cul"
a[2] = "de"
a[3] = "sac"
```
and sets the contents of the array seps as follows: 
```
seps[1] = "-"
seps[2] = "-"
```

---

```
awk '{split($6, versiona, "."); split($11, versionb, "."); print $6,$11 }' file_postbin.csv
```

Prints lines that satisfy conditional statement 
```
awk '{split($6, versiona, "."); split($11, versionb, "."); if ( versiona[1] == versionb[1] && versiona[2] == versionb[2] ) print $0; }' file_postbin.csv 
```

Final output
```
awk '{split($6, versiona, "."); split($11, versionb, "."); if ( versiona[1] == versionb[1] && versiona[2] == versionb[2] ) print $1, $6, $11; }' file_postbin.csv 
```