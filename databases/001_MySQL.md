# Installing MySQL



## Download

1. [MySQL-Website](https://dev.mysql.com/downloads/)

2. Windows
   * [Installer](https://dev.mysql.com/downloads/installer/)
   * [Choco](https://chocolatey.org/packages?q=mysql)
```
choco install mysql
```
```
choco install mysql.workbench
```

3. MAC
```
brew install mysql
```
<hr>

## Installer

Choices (use default if not highlighted below): 
1. Developer Default
2. Standalone MySQL Server/ Classic MySQL Replication 


## Login to remote server


### Shell
ssh username@host_machine_ip

mysql -u database_username -p

Username: helpdesk
Password: helpdesk123@cal
[ssh-tunnel](https://www.linode.com/docs/databases/mysql/create-an-ssh-tunnel-for-mysql-remote-access/)

### Putty
Login via [putty](https://www.linode.com/docs/databases/mysql/create-an-ssh-tunnel-for-mysql-remote-access/)