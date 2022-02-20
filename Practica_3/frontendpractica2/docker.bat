
docker build -t frontend:latest .
docker stop frontend 
docker rm frontend
docker run --name frontend -p 8081:8080 -d frontend:lastest