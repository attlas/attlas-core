pipeline {
  agent any

  stages {
    stage('Configure') {
      steps {
        sh '''
          cp ./.env.template ./.env
          sed -i "/COMPOSE_PROJECT_NAME=/ s/=.*/=$COMPOSE_PROJECT_NAME/" ./.env
          sed -i "/SERVICE_DOMAIN=/ s/=.*/=$SERVICE_DOMAIN/" ./.env
          sed -i "/SERVICE_DOMAIN_EMAIL=/ s/=.*/=$SERVICE_DOMAIN_EMAIL/" ./.env
          sed -i "/SERVICE_ID=/ s/=.*/=$SERVICE_ID/" ./.env
          sed -i "/SERVICE_DESC=/ s/=.*/=\\"$SERVICE_DESC\\"/" ./.env
          cat ./.env
        '''
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
    stage('Deploy & Publish') {
      steps {
        sh './service-deploy.sh'
        archive "./mobile/platforms/android/build/outputs/apk/*.apk"
      }
    }
    stage('Cleanup') {
      steps {
        echo 'Cleanup'
      }
    }
  }
}