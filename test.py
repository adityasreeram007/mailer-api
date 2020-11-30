import requests
url="http://127.0.0.1:3000/"
obj={"pass":"NeuralNet@1","sender":"adityasreeram99@gmail.com","reciever":"adityasreeram99@gmail.com","sub":"adityasreeram99@gmail.com","msg":"adityasreeram99@gmail.com"}
res=requests.post(url,data=obj)
print(res)
