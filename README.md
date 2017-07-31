# attlas-portal

## CICD

### Local dev environment
* Clone forked master repository
* Configure developer parameter for local repository
```
> git config --local user.name <developer name>
> git config --local user.email <developer email>
> git remote add upstream <master git reposiotry>
 
```
* Add Cordova platforms
```> mobile/cordova platform add [android|browser]```
* Build
```> mobile/cordova build [android|browser]```
* Run
```> mobile/cordova run [android|browser]```

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
* Check "GitHub hook trigger for GITScm polling" at Jenkins job configuration
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
* Execute <project_root>/devops/prereq.sh cordova
* Execute <project_root>/devops/prereq.sh android

### Staging/Prod
* Login into remote VM
* Add <project_root>/devops/jenkins.rsa.pub into authorized_keys

