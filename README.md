# attlas-portal

## Configuration
### Jenkins
* run devops/jenkins/setup.sh
* reboot VM
* add jenkins.rsa.pub into authorized_keys for every VM wich will be controlled by Jenkins and initiate one ssh connect to update known_hosts

## Jenkins-Github

### Jenkins
* execute 'docker-compose up -d' from devops/sonar folder
* login <host>:9000 with admin/admin and change password