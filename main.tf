provider "google" {
 credentials = file("SA_key.json")
 project     = "sopes-1-g13"
 region      = "us-central1"
 zone = "us-central1-a"
}

module "gce-worker-container" {
  source = "./Practica_7"

  image = "edilson35s78/practica6"
  instance_name = "pareja5practica7"
  network_name = "default"
}