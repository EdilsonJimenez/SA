pipeline {
  agent {
    node {
      label 'pipeline_practica3'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'cd Practica_3/'
        sh 'cd frontendpractica2/'
        sh 'npm install'
        sh 'npm run build'
      }
    },
      stage('tests') {
      steps {
        sh 'npm run test:unit'
      }
    }

  }
}
