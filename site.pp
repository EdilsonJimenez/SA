exec {'list_docker_containers':
  command => "/bin/bash -c 'docker ps -a'",
  notify  => Exec['stop_docker_containers'],
}

exec {'stop_docker_containers':
  command => "/bin/bash -c 'sudo docker stop frontend || (echo "Image edilson35s78/practica6 didn't exist so not removed."; exit 0)'",
  refreshonly => true,
  notify  => Exec['clear_docker_containers'],
}

exec {'clear_docker_containers':
  command => "/bin/bash -c 'sudo docker rm frontend || (echo "Image edilson35s78/practica6 didn't exist so not '",
  refreshonly => true,
  notify  => Exec['clear_docker_images'],
}

exec {'clear_docker_images':
  command => "/bin/bash -c 'sudo docker rmi edilson35s78/practica6'",
  refreshonly => true,
  notify  => Exec['pull_docker_images'],
}

exec {'pull_docker_images':
  command => "/bin/bash -c 'sudo docker pull edilson35s78/practica6'",
  cwd => "/home/jenkins/",
  refreshonly => true,
  notify  => Exec['up_docker_images'],
}

exec {'up_docker_images':
  command => "/bin/bash -c 'sudo docker run --name frontend -p 8080:8080 -d edilson35s78/practica6'",
  cwd => "/home/jenkins/",
  refreshonly => true,
}