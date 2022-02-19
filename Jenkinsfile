pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat """
    cd Practica_3
    cd frontendpractica2
    npm install
    npm run build
"""
      }
    }

    stage('test') {
      steps {
          bat """
    cd Practica_3
    cd frontendpractica2
    npm run test:unit
"""
 
      }
    }

  }
}
