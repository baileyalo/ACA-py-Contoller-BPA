# ACA-py-Contoller-BPA

RUN BPA :
Install Virtual Machine on Azure public IP: http://20.116.10.199:8080/
sudo docker-compose up

RUN ACA-PY
install virtual machine on Azure public IP: http://20.151.204.61:8080/

Register Seed Manually at : 

https://indy-test.bosch-digital.de

Then Run: 

aca-py provision \
--wallet-type indy \
--endpoint http://20.151.204.61 \
--seed 100B000000300000c00000000000000D \
--wallet-name AlwayneWallet \
--wallet-key MASTER_KEY_SECRET \
--genesis-url https://indy-test.bosch-digital.de/genesis

aca-py start \
--inbound-transport http 0.0.0.0 8000 \
--endpoint http://20.151.204.61:8000 \
--outbound-transport http \
--admin 0.0.0.0 8080 \
--webhook-url http://34.228.20.198:3000 \
--genesis-url https://indy-test.bosch-digital.de/genesis \
--wallet-type indy \
--wallet-name AlwayneWallet \
--wallet-key MASTER_KEY_SECRET \
--seed 100B000000300000c00000000000000D \
--admin-insecure-mode \
--label MY_SSI_AGENT \
--log-level debug \
--storage-type indy \
--auto-ping-connection \
--max-message-size 10485760

RUN ACA-py Controller 

install virtual Machine on AWS public ip : http://34.228.20.198

Pre-requisites: 

sudo apt update,
sudo apt upgrade,
sudo apt install nodejs,
sudo apt install npm,
sudo npm install -g n,
sudo n latest,
sudo npm install npm@latest -g 

 HEAD
clone git https://github.com/baileyalo/ACA-py-Contoller-BPA.git

BPA running :
=======
BPA running:
![image](https://user-images.githubusercontent.com/90293555/150627463-1e4bf6ad-acc4-4e4c-a1e7-0f26dff551dd.png)

ACA-py Running :
![image](https://user-images.githubusercontent.com/90293555/150627505-4e5cbde8-afc5-43ad-bc75-8414d830f6d1.png)

controller running :
![image](https://user-images.githubusercontent.com/90293555/150627530-4fb4eb8a-c6be-47fb-91d9-3cda9f56c5f4.png)




clone git https://github.com/baileyalo/ACA-py-Contoller-BPA.git

run on Controller server:
React web interface : http://34.228.20.198: 3000 
