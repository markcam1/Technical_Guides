# Networking and System cheat sheet



* what processes are running on the what ports
```
netstat -a -b -o

```

* what process is running on a particular port
```
Get-Process -Id (Get-NetTCPConnection -LocalPort 8081).OwningProcess
```





## Resources
[netstat](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/netstat);
