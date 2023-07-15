#!/bin/bash

docker-compose -f run-microservices.yml build
docker-compose -f run-microservices.yml up
