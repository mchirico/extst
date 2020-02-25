PROJECT = mchirico
NAME = extst
TAG = test


docker-build:
	docker build --no-cache -t gcr.io/$(PROJECT)/$(NAME):$(TAG) -f Dockerfile .


push:
	docker push gcr.io/$(PROJECT)/$(NAME):$(TAG) 



pull:
	docker pull gcr.io/$(PROJECT)/$(NAME):$(TAG) 



run:
	mkdir -p log${NAME}
	docker run -p 3000:3000 --rm -it -d --name $(NAME) gcr.io/$(PROJECT)/$(NAME):$(TAG) 


stop:
	docker stop $(NAME)

logs:
	docker logs $(NAME)

log:
	docker logs $(NAME)



