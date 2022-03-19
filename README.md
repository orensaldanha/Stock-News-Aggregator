# Stockfinch

# Installation steps:

1. Clone the repo

        git clone https://github.com/orensaldanha/stockfinch.git

2. Add user to docker group 

        sudo groupadd docker  

        sudo usermod -aG docker $USER

    Log out and Log in again for changes to take effect

3. Create containers (Run inside stockfinch folder)

        docker-compose up -d

4. Download database dump from https://drive.google.com/drive/folders/10QQC2p1psvQXzWmk3-vynflGYE2Mx_zB?usp=sharing and store inside stockfinch folder

5. Load database

        cat dump_19-03-2022_16_13_22.sql | docker exec -i stockfinch_db psql -U app_user -d stockfinch  

6. Check if the application is running

    Go to localhost:5000 in the browser

7. To stop containers

        docker-compose down