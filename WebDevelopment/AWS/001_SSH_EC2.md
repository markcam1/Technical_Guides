# ssh putty to ec2
On the Start menu, choose All Programs, PuTTY, PuTTY.

In the Category pane, choose Session and complete the following fields:

For Host Name, enter ec2-user@public_dns_name.

Note

You can get the public DNS for your instance using the Amazon EC2 console. (If the Public DNS column is hidden, choose the Show/Hide icon.)

For Connection type, choose SSH.

For Port, ensure that the value is 22.

In the Category pane, choose Connection, SSH, and Auth. Complete the following:

Choose Browse, select the .ppk file that you generated for your key pair, and then choose Open.

Choose Open to start the PuTTY session.

---



On the Amazon EC2 console, in the navigation pane, choose Instances.

Select the instance that you launched and choose Connect.

Public DNS

For User name, enter ec2-user.

For Private key path, enter the fully qualified path to your private key (.pem) file, including the key pair name, for example, C:\KeyPairs\my-key-pair.pem.