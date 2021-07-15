FROM node:16-buster

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/react-app

RUN npm install -g axios --save
RUN npm install -g @reduxjs/toolkit --save
