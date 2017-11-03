sudo docker container ls -a | grep "govno" | cut -c-12 | xargs -I{} sh -c "sudo docker start {}"
