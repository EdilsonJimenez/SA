pipeline {
  agent {
    node {
      label 'pipeline_practica3'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}