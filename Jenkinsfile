pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'cd Practica_3'
        bat 'cd frontendpractica2'
        bat 'npm install'
        bat 'npm run build'
      }
    }

    stage('test') {
      steps {
        bat 'npm run test:unit'
      }
    }

  }
}