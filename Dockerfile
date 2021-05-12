FROM python:3.9-slim
COPY ./app.py /deploy/
COPY ./requirements.txt /deploy/
WORKDIR /deploy/
RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python", "app.py"]