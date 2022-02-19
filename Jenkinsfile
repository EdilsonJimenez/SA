pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'cd Practica_3'
        sh 'cd frontendpractica2'
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('test') {
      steps {
        sh 'npm run test:unit'
      }
    }

  }
}