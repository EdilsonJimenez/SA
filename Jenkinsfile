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
            git config --global user.email "201504326@ingenieria.usac.edu.gt"
            git config --global user.name "wjosuep13"
            npm run deploy
            git push -f https://${key}@github.com/wjosuep13/SA.git master:gh-pages
         '''
      }
    }

  }
  environment {
    KEY = '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'
  }
}
