#!/bin/bash
echo -e '\n[\e[32mStopping govno microservices\e[0m]'
sudo docker container ls -a | grep "govno" | cut -c-12 | xargs -I{} sh -c "sudo docker stop {}"
echo -e '[\e[32mSuccess!\e[0m]\n'
