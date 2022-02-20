pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        bat '''
            cd Practica_3
            cd frontendpractica2
            npm install   
        '''
      }
    }

    stage('build') {
      steps {
        bat '''
            cd Practica_3
            cd frontendpractica2
            npm run build 
        '''
      }
    }

    stage('test') {
      steps {
        bat '''
            cd Practica_3
            cd frontendpractica2
            npm run test:unit  
         '''
      }
    }

    stage('deploy') {
      when {
        expression {
          env.BRANCH_NAME == 'main'
        }

      }
      steps {
        bat '''
            cd Practica_3
            cd frontendpractica2
            docker stop frontend 
            docker rm frontend
            docker rmi frontend:latest
            docker build -t frontend:latest .            
            docker run --name frontend -p 8081:8080 -d frontend:latest
         '''
      }
    }

  }
}
