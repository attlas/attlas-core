# attlas-portal

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
* Clone repository
* Execute <project_root>/devops/prereq.sh docker
* Execute <project_root>/devops/prereq.sh jenkins
* Execute <project_root>/devops/prereq.sh nodejs
* Commit Jenkins SSH public key back to the repository

#### Jenkins-Github
* Check "GitHub hook trigger for GITScm polling" inside Jenkins job configuration
* ?Create personal access token
* ?Add github server into Jenkins
* Add web-hook at Github project side http://<jenkinsHost>:8080/github-webhook/

#### Jenkins-SonarQube
* Execute '<project_root>/sonar-up.sh'
* Login <host>:9000 with admin/admin and change password

#### Jenkins-Nexus
* Execute '<project_root>/nexus-up.sh'
* Login <host>:8081 with admin/admin123 and change password

#### Android
* Execute <project_root>/cidd/prereq.sh cordova
* Execute <project_root>/cidd/prereq.sh android

### Staging/Prod
* Login into remote VM
* Add <project_root>/cidd/jenkins.rsa.pub into authorized_keys

