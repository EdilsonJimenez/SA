provider "google" {
 credentials = file("SA_key.json")
 project     = "sopes-1-g13"
 region      = "us-west1"
}
