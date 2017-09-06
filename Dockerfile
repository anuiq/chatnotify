FROM artifactory.cobalt.com/node4

ADD . /usr/src/app/
WORKDIR /usr/src/app

EXPOSE 9090
CMD [ "node", "src/server.js" ]
