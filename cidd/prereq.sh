#!/bin/bash

echo --- Update VM ---
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install mc

echo --- Update/setup Java ---
sudo apt-get install -y default-jre
sudo apt-get install -y default-jdk

if [ "$1" == "docker" ]; then
  echo --- Install Docker & Docker-Compose ---
  sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  sudo apt-key fingerprint 0EBFCD88
  sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  sudo apt-get update
  sudo apt-get install -y docker-ce

  sudo curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
fi

if [ "$1" == "jenkins" ]; then
  echo --- Install Jenkins ---
  sudo wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
  sudo echo "deb https://pkg.jenkins.io/debian-stable binary/" | tee -a /etc/apt/sources.list
  sudo apt-get update
  sudo apt-get install -y jenkins
  usermod -G docker -a jenkins
  sudo systemctl start jenkins

  su -c "cd ~ && pwd && ssh-keygen -t rsa -b 4096" - jenkins
  cp /var/lib/jenkins/.ssh/id_rsa.pub ./jenkins.rsa.pub
fi

if [ "$1" == "maven" ]; then
  echo --- Install Maven ---
  sudo apt-get -y install maven
fi

if [ "$1" == "nodejs" ]; then
  echo --- Install Nodejs 6.x & NPM ---
  sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash 
  sudo apt-get -y install nodejs
  sudo apt-get -y install npm
fi

if [ "$1" == "cordova" ]; then
  echo --- Install Cordova ---
  sudo npm install -g cordova@latest

  sudo wget https://services.gradle.org/distributions/gradle-3.4.1-bin.zip -O /tmp/gradle-3.4.1-bin.zip
  sudo mkdir /opt/gradle
  sudo unzip /tmp/gradle-3.4.1-bin.zip -d /opt/gradle
fi

if [ "$1" == "android" ]; then
  echo --- Install Android tools ---
  sudo mkdir /usr/lib/android-sdk
  sudo wget https://dl.google.com/android/repository/tools_r25.2.3-linux.zip -O /tmp/tools_r25.2.3-linux.zip
  sudo unzip /tmp/tools_r25.2.3-linux.zip -d /usr/lib/android-sdk
  pushd /usr/lib/android-sdk/tools
  sudo ./android update sdk --no-ui
  popd
  # adb
  #? sudo apt-get -y install libc6:i386 libstdc++6:i386
  # aapt
  #? sudo apt-get install zlib1g:i386


fi
