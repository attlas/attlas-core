pipeline {
  agent any

  stages {
    stage('Configure') {
      steps {
        sh 'cp ./.env.template ./.env'
        sh 'sed -i "/SERVICE_NAME=/ s/=.*/=$SERVICE_NAME/" ./.env'
        sh 'sed -i "/SERVICE_DOMAIN=/ s/=.*/=$SERVICE_DOMAIN/" ./.env'
        sh 'sed -i "/SERVICE_DOMAIN_EMAIL=/ s/=.*/=$SERVICE_DOMAIN_EMAIL/" ./.env'
        sh 'sed -i "/SERVICE_ID=/ s/=.*/=$SERVICE_ID/" ./.env'
        sh 'sed -i "/SERVICE_DESC=/ s/=.*/=\"$SERVICE_DESC\"/" ./.env'
        sh 'cat ./.env'
      }
    }
    stage('Build') {
      steps {
        sh './service-build.sh'
      }
    }
    stage('Test') {
      steps {
        sh './service-test.sh'
      }
    }
    stage('Up') {
      steps {
        sh './service-up.sh -d'
      }
    }
    stage('Deploy') {
      steps {
        sh './service-deploy.sh'
      }
    }
    stage('Cleanup') {
      steps {
        echo 'Cleanup'
      }
    }
  }
}