#!/bin/bash
echo -e '\e[32mStopping govno microservices'
sudo docker container ls -a | grep "govno" | cut -c-12 | xargs -I{} sh -c "sudo docker rm {}"
