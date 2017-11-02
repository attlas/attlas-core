# attlas-portal

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
* Clone repository
* Execute <project_root>/devops/prereq.sh docker
* Execute <project_root>/devops/prereq.sh jenkins
* Execute <project_root>/devops/prereq.sh nodejs
* Commit Jenkins SSH public key back to the repository

#### Jenkins-Github
#### Issues
* "ALPN callback dropped: SPDY and HTTP/2 are disabled. Is alpn-boot on the boot class path?"
  * Get your Java version '''java -version #openjdk version "1.8.0_131"'''
  * Find corresponding alpn boot library '''https://www.eclipse.org/jetty/documentation/9.4.x/alpn-chapter.html#alpn-versions #8.1.11.v20170118'''
  * Download it from '''http://central.maven.org/maven2/org/mortbay/jetty/alpn/alpn-boot/ #/usr/lib/jvm'''
  * Modify '''/etc/default/jenkins''' JAVA_ARGS adding '''-Xbootclasspath/p:/path/to/alpn-boot-8.1.11.v20170118.jar'''
  * Restart Jenkins '''systemctl stop jenkins & systemctl start jenkins'''

* Create access token with repo, admin:repo_hook, admin:org_hook
* Install next plugins: GitHub Pull Request Builder
* Configure "GitHub Pull Request Builder"& "GitHub" plugins using access token
* Create new pipeline job, using cidd/Jenkinsfile
* Check & configure "GitHub Pull Request Builder"
* Check "GitHub hook trigger for GITScm polling"
* ????Add web-hook at Github project side http://<jenkinsHost>:8080/github-webhook/

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
