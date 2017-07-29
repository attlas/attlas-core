# attlas-portal

## CICD

### Build VM
* Get Ubuntu VM (16.04)
* Clone repository
* Execute <project_root>/devops/prereq.sh docker
* Execute <project_root>/devops/prereq.sh jenkins
* Commit Jenkins SSH public key back to the repository

#### Jenkins-Github
* Check "GitHub hook trigger for GITScm polling" at Jenkins job configuration
* ?Create personal access token
* ?Add github server into Jenkins
* Add web-hook at Github project side http://<jenkinsHost>:8080/github-webhook/

#### Jenkins-SonarQube
* Execute 'docker-compose up -d' from <project_root>/devops/sonar folder
* Login <host>:9000 with admin/admin and change password

### Dev/Staging/Prod
* Login into remote VM
* Add <project_root>/devops/jenkins.rsa.pub into authorized_keys

