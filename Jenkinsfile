pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        bat """
            cd Practica_3
            cd frontendpractica2
            npm install
        """
      }
    }

    stage('build') {
      steps {
        bat """
            cd Practica_3
            cd frontendpractica2
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
