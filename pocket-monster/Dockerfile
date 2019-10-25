FROM node

RUN npm i -g \
rollup \
typescript \
renamer \
&& npm cache clean --force

WORKDIR /
COPY package.json package-lock.json ./
RUN npm i && npm cache clean --force
ENV PATH /node_modules/.bin:$PATH

WORKDIR /app
VOLUME /app
