# AWS Code Deploy | EC2 | github

## IAM config

Step 1: Provision an IAM [User](https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-provision-user.html)


[Step-4](https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-iam-instance-profile.html)
* Create an IAM Instance Profile for Your Amazon EC2 Instances
* You've now created an IAM instance profile to attach to your Amazon EC2 instances. 

## Launch EC2

1. [launch](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-ec2-create.html)


Sign in to the AWS Management Console and open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.

In the navigation pane, choose Instances, and then choose Launch Instance.

On the Step 1: Choose an Amazon Machine Image (AMI) page, from the Quick Start tab, locate the operating system and version you want to use, and then choose Select.

On the Step 2: Choose an Instance Type page, choose any available Amazon EC2 instance type, and then choose Next: Configure Instance Details.

On the Step 3: Configure Instance Details page, in the IAM role list, choose the IAM instance role you created in Step 4: Create an IAM Instance Profile for Your Amazon EC2 Instances. If you used the suggested role name, then choose CodeDeployDemo-EC2-Instance-Profile. If you created your own role name, choose that.

Note

If Launch into EC2-Classic or a default virtual private cloud (VPC) are not displayed in the Network list, and you cannot choose a different Amazon EC2 instance type that supports launching into EC2-Classic, you must choose or create an Amazon VPC and subnet. Choose Create new VPC or Create new subnet or both. For more information, see Your VPC and Subnets.

Expand Advanced Details.

Next to User data, with the As text option selected, type the following to install the AWS CodeDeploy agent as the Amazon EC2 instance is launched.

bucket-name is the name of the Amazon S3 sds-s3-latest-bucket-name bucket that contains the AWS CodeDeploy Resource Kit files for your region. For example, for the US East (Ohio) Region, replace bucket-name with aws-codedeploy-us-east-2. For a list of bucket names, see Resource Kit Bucket Names by Region.


---

Leave the rest of the items on this page unchanged, and choose Next: Add Storage.

Leave the Step 4: Add Storage page unchanged, and choose Next: Add Tags.

On the Step 5: Add Tags page, choose Add Tag.

In the Key box, type Name. In the Value box type CodeDeployDemo.

Choose Next: Configure Security Group.

On the Step 6: Configure Security Group page, leave the Create a new security group option selected.

A default SSH role _in *Source* choose MY IP_ is configured for Amazon EC2 instances running Amazon Linux, Ubuntu Server, or RHEL. A default RDP role is configured for Amazon EC2 instances running Windows Server.

Leave the Step 7: Review Instance Launch page unchanged, and choose Launch.

In the Select an existing key pair or create a new key pair dialog box, choose either Choose an existing key pair or Create a new key pair. If you've already configured an Amazon EC2 instance key pair, you can choose it here.

If you don't already have an Amazon EC2 instance key pair, choose Create a new key pair and give it a recognizable name. Choose Download Key Pair to download the Amazon EC2 instance key pair to your computer.

Important

You must have a key pair if you want to access your Amazon EC2 instance with SSH or RDP.

Choose Launch Instances.

## Configure an Amazon EC2 Instance to Work with AWS CodeDeploy
