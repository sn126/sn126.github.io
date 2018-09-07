# python BE builder
FROM python:3.7-alpine as be_builder

RUN mkdir -p /code
WORKDIR /code
COPY requirements.txt /code/requirements.txt
RUN pip install -r requirements.txt

# ---------------------
# Prod ui builder
FROM node:10.8.0-alpine as ui_builder

RUN mkdir -p /code
WORKDIR /code

COPY package.json /code
RUN npm install

COPY webpack.config.js /code/webpack.config.js
COPY index.js /code/index.js
COPY app/. /code/app/
RUN yarn run build .

# ---------------------
# back to Python be builder for completion of the image
FROM be_builder

COPY . /code
COPY --from=ui_builder /code/app/static/dist /code/app/static/dist

EXPOSE 5000

# $PORT is set by Heroku
CMD gunicorn --bind 0.0.0.0:$PORT wsgi
