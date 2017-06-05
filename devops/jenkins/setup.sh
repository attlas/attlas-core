#!/bin/bash


echo --- Update VM ---
#sudo apt-get update
#sudo apt-get -y upgrade
#sudo apt-get install -y mc


echo --- Update/setup Java ---
#sudo apt-get install -y default-jre
#sudo apt-get install -y default-jdk


echo --- Install Docker & Docker-Compose ---
#sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
#sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
#sudo apt-key fingerprint 0EBFCD88
#sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
#sudo apt-get update
#sudo apt-get install -y docker-ce

#sudo curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
#sudo chmod +x /usr/local/bin/docker-compose


echo --- Install Jenkins ---
#sudo wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
#sudo echo "deb https://pkg.jenkins.io/debian-stable binary/" | tee -a /etc/apt/sources.list
#sudo apt-get update
#sudo apt-get install -y jenkins
#usermod -G docker -a jenkins
#sudo systemctl start jenkins

#su -c "cd ~ && pwd && ssh-keygen -t rsa -b 4096" - jenkins
#cp $JENKINS_HOME/.ssh/id_rsa.pub ./jenkins.rsa.pub