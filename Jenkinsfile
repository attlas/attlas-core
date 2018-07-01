def sendEmailNotification(subj, recepients) {
  emailext body: "${BUILD_URL}",
  recipientProviders: [
    [$class: 'CulpritsRecipientProvider'],
    [$class: 'DevelopersRecipientProvider'],
    [$class: 'RequesterRecipientProvider']
  ],
  subject: subj,
  to: "${recepients}"
}

node {
  def pullRequest = false
  //
  stage('Clone sources') {
    //
    def scmVars = checkout scm
    //
    if (params.containsKey('sha1')){
      pullRequest = true
      echo "Pull request build sha1: ${sha1}"
      sh "git fetch --tags --progress origin +refs/pull/*:refs/remotes/origin/pr/*"
      sh "git checkout ${ghprbActualCommit}"
    }else{
      echo "Build push branch: ${scmVars.GIT_BRANCH}, sha: ${scmVars.GIT_COMMIT}"
      sh "git checkout ${scmVars.GIT_COMMIT}"
    }
    echo sh(returnStdout: true, script: 'env')
  }
  /*
  def groupId = sh(returnStdout: true, script:'''mvn help:evaluate -Dexpression=project.groupId | grep -e "^[^\\[]"''').trim()
  //def artifactId = sh(returnStdout: true, script:'''mvn help:evaluate -Dexpression=project.artifactId | grep -e "^[^\\[]"''').trim()
  def artifactId = sh(returnStdout: true, script:'''pushd bundle > /dev/null && mvn help:evaluate -Dexpression=project.artifactId | grep -e "^[^\\[]" && popd > /dev/null''').trim()
  def version = sh(returnStdout: true, script:'''mvn help:evaluate -Dexpression=project.version | grep -e "^[^\\[]"''').trim()
  echo "groupId: ${groupId} artifactId: ${artifactId} version: ${version}"
  */
  // Get repo parameters
  def repo = sh(returnStdout: true, script:'''git config --get remote.origin.url | rev | awk -F'[./:]' '{print $2}' | rev''').trim()
  def org = sh(returnStdout: true, script:'''git config --get remote.origin.url | rev | awk -F'[./:]' '{print $3}' | rev''').trim()
  echo "org: ${org} repo: ${repo}"
  //
  // Get author(s')'s emails
  def lastCommitAuthorEmail = sh(returnStdout: true, script:'''git log --format="%ae" HEAD^!''').trim()
  if (!pullRequest){
    lastCommitAuthorEmail = sh(returnStdout: true, script:'''git log -2 --format="%ae" | paste -s -d ",\n"''').trim()
  }
  echo "lastCommitAuthorEmail: ${lastCommitAuthorEmail}"
  //
  sh "envsubst < .env.template > .env"
  sh "cat ./.env"
  try {
    stage('Build & Unit test') {
      //
      sh "./build.sh"
      sh "./test.sh"
      //
    }
    //
    stage('SonarQube analysis') {
      /*/
      def scannerHome = tool 'SonarQube Scanner';
      withSonarQubeEnv('SonarQube') {
        if (pullRequest){
          sh "${scannerHome}/bin/sonar-scanner -Dsonar.analysis.mode=preview -Dsonar.github.pullRequest=${ghprbPullId} -Dsonar.github.repository=${org}/${repo} -Dsonar.github.endpoint=https://github.bmc.com/api/v3 -Dsonar.github.oauth=${GITHUB_ACCESS_TOKEN} -Dsonar.login=${SONARQUBE_ACCESS_TOKEN}"
        } else {
          sh "${scannerHome}/bin/sonar-scanner"
          // check SonarQube Quality Gates
          //// Pipeline Utility Steps
          def props = readProperties  file: '.scannerwork/report-task.txt'
          echo "properties=${props}"
          def sonarServerUrl=props['serverUrl']
          def ceTaskUrl= props['ceTaskUrl']
          def ceTask
          //// HTTP Request Plugin
          timeout(time: 1, unit: 'MINUTES') {
            waitUntil {
              def response = httpRequest "${ceTaskUrl}"
              println('Status: '+response.status)
              println('Response: '+response.content)
              ceTask = readJSON text: response.content
              return (response.status == 200) && ("SUCCESS".equals(ceTask['task']['status']))
            }
          }
          //
          def qgResponse = httpRequest sonarServerUrl + "/api/qualitygates/project_status?analysisId=" + ceTask['task']['analysisId']
          def qualitygate = readJSON text: qgResponse.content
          echo qualitygate.toString()
          if ("ERROR".equals(qualitygate["projectStatus"]["status"])) {
            currentBuild.description = "Quality Gate failure"
            sendEmailNotification(currentBuild.description, lastCommitAuthorEmail)
            currentBuild.result = 'UNSTABLE'
            //error currentBuild.description
          }
        }
      }
      /*/
    }
    //
    stage('Archive & Upload artifacts') {
      /*/
      if (!pullRequest){
        sh "./devops/dsm/upload.sh ${groupId} ${artifactId} ${version} './bundle/target'"
        archiveArtifacts artifacts: 'package/target/*.zip'    
        sh "./devops/dsm/upload-osgi.sh ${groupId} ${artifactId} ${version} './package/target' $DSM_APPS_NEXUS_OSGI_HOST $DSM_APPS_NEXUS_OSGI_REPO"
      }
      /*/
    }
    //
    stage('Postprocess') {
      /*/
      if (!pullRequest){
        try {
          if (POSTPROCESS_JOB) {
            build job: "${POSTPROCESS_JOB}", parameters: [
              [$class: 'StringParameterValue', name: 'BUILD_VERSION', value: "${version}"]
            ]
          }
        } catch(e){}
      }
      /*/
    }
    //
  } catch (e) {
    //
    //sendEmailNotification('BUILD FAILED', lastCommitAuthorEmail)
    throw e
    //
  }
}
