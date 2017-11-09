# @tlas XaaS

## Prerequisites
* ```apt-get -y install php7.0-cli```

## Create backend
```
mvn archetype:generate -DarchetypeArtifactId=jersey-quickstart-grizzly2 -DarchetypeGroupId=org.glassfish.jersey.archetypes -DinteractiveMode=false -DgroupId=com.attlas -DartifactId=service -Dpackage=com.attlas -DarchetypeVersion=2.17
```

## CIDD

### Local dev environment
* Clone forked repository
* Configure developer parameter for local repository
```
> git config --local user.name <developer name>
> git config --local user.email <developer email>
> git remote add upstream <master git reposiotry>
```
#### Frontend
* Install dependencies
```
  > cd static
  > npm i
```
* Build
```
  > cd static
  > npm run build
```

#### Mobile
* Add Cordova platforms
```> mobile/cordova platform add [android|browser]```
* Build
```> mobile/cordova build [android|browser]```
* Run
```> mobile/cordova run [android|browser [[--port=8001] [--target=Firefox]]]```
* Debug
* http://geeklearning.io/apache-cordova-and-remote-debugging-on-android/

#### Linux
#### Windows
#### MacOs

### Build VM
* Get Ubuntu VM (16.04)
* Install jre/jdk, docker, jenkins, nodejs, maven

#### Jenkins-Nexus
* Execute '<project_root>/nexus-up.sh'
* Login <host>:8081 with admin/admin123 and change password

#### Android
* Execute <project_root>/cidd/prereq.sh cordova
* Execute <project_root>/cidd/prereq.sh android

### Staging/Prod
* Login into remote VM
* Add <project_root>/cidd/jenkins.rsa.pub into authorized_keys
