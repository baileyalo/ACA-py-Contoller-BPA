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
sudo apt update
sudo apt upgrade
sudo apt install nodejs
sudo apt install npm
sudo npm install -g n
sudo n latest
sudo npm install npm@latest -g 

clone git https://github.com/baileyalo/ACA-py-Contoller-BPA.git