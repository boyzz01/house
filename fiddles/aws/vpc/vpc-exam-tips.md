<img src="https://i.imgur.com/4x1VSb6.png" height="100" title="AWS VPC" />


VPC Exam Tips
======

6 minute lecture summarizing what you need to know about VPC's for the Exam.
 
  
## Video Link

[![acloud.guru lecture](https://i.imgur.com/YvmSUqd.png)](https://acloud.guru/course/aws-certified-solutions-architect-associate/learn/vpc/summary/watch)

*Note - You will need an [acloud.guru](acloud.guru) account.*


## Big Picture: What did we do?

<table>
<tr>
<td>
 <img src="https://i.imgur.com/FNyl0I9.png" height="250" title="Big Picture" />
</td>
</tr>
</table>


## Exam Tips

What did we learn?

### NAT Instances

* When creating a NAT instance, Disable `Source/Destination check` on the instance
* NAT instances must be in a public subnet
* There must be a route out of the private subnet to the NAT instance, in order for this to work
* The amount of traffic that NAT instances can support depends on the instance size. If you are
  bottle necking, increase the instance size
* You can create high availability using AutoScaling Groups, multiple subnets in different AZ's,
  and a script to automate failover
  
  
### NAT Gateways

* Preferred by Enterprises
* Scale automatically up to 10Gbps
* No need to patch
* Not associated with security groups
* Automatically assigned a public IP address
* Remember to update your route tables
* No need to disable Source/Destination checks
* More secure than a NAT instance


### Network ACLs

* Your VPC automatically comes with a default network ACL, and by default it allows all outbound
  and inbound traffic
* You can create custom network ACLs. By default, each custom network ACL denies all inbound and
  outbound traffic until you add rules
* Each subnet in your VPC must be associated with a network ACL. If you don't explicitly associate 
  a subnet with a network ACL, the subnet is automatically associated with the default network
  ACL
* You can associate a network ACL with multiple subnets; however, a subnet can be associated with
  only one network ACL at a time. When you associate a network ACL with a subnet, the previous
  association is removed
* Network ACLs contain a numbered list of rules that is evaluated in order, starting with the 
  lowest numbered rule
* Network ACLs have separate inbound and outbound rules, and each rule can either allow or deny
  traffic
* Network ACLs are stateless; responses to allowed inbound traffic are subject to the rules for
  outbound traffic (and vice versa)
* Block IP Addresses using network ACLs not Security Groups


### Application Load Balancer's

* You will need at least 2 public subnets in order to deploy an application load balancer's


### VPC Flow Logs

* You cannot enable flow logs for VPCs that are peered with your VPC unless the peer VPC is in your account
* You cannot tag a flow log
* After you created a flow log, you cannot change its configuration; for example you can't associate a 
  different IAM role with the flow log
* Not all IP Traffic is monitored, including:
  * Traffic generated by instances when they contact the Amazon DNS server. _Note - If you use your own DNS server, then
    all traffic to that DNS server is logged_
  * Traffic generated by a Windows instance for Amazon Windows license activation 
  * Traffic to and from 169.254.169.254 for instance metadata
  * DHCP traffic
  * Traffic to the reserved IP address for the default router


### VPC End Points

    TBW
    
 
### Review Questions

1.  If you create a NAT instance, what must be disabled on the instance?
2.  What subnet must a NAT instance reside in?  
3.  How do you remedy NAT instance bottle necking? 
4.  What are the 3 methods for increasing availability of NAT Instances?
5.  What security dependency do NAT instance's share with other EC2 instances?
6.  Why are NAT Gateways preferred to NAT Instances? (3 reasons)
 

### Answers

1.  Source/Destination check
2.  Public
3.  Increase the size of the NAT instance
4.  (1) AutoScaling Groups; (2) multiple subnets in different AZ's; (3) automate failover script
5.  They must belong to a security group
6.  (1) Scale automatically to 10Gbps; (2) No need to patch; (3) More Secure


## 

**[Previous Lab/Lecture](vpc-cleanup-lab.md) | [AWS (root)](../readme.adoc) | [Next Lab/Lecture](../apps/apps-sqs-101.md)**







