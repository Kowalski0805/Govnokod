#!/bin/bash
echo -e '\n[\e[32mRemoving Docker govnocontainers\e[0m]'
sudo docker container ls -a | grep "govno" | cut -c-12 | xargs -I{} sh -c "sudo docker rm {}"
echo -e '[\e[32mSuccess!\e[0m]\n'
