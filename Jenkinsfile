pipeline {
  agent any
  

  stages {
    stage('testing') {
      steps {
        sh '''npm --version
              cd Practica_4
              cd frontendpractica2
              npm install
              npm run build
              npm run test:unit
        '''
      }
    }

    stage('build') {
      steps {
        sh '''
            docker-compose build --no-cache
            docker login -u $6d7299f0-be5f-431e-a587-22864e860b68 --password-stdin'
            docker-compose push
            docker system prune --force --filter \'until=2h\'
            docker volume prune --force
        '''
      }
    }

    stage('deploy') {
      steps {
        sh '''
            ansible-playbook playbook.yml -i host.yml
        '''
      }
    }

  }
}
