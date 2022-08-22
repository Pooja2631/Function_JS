# i=1
# while i<=100:
#     j=2
#     count=0
#     while j<i:
#         if i%j==0:
#             count=count+1
#         j=j+1
#     if count==0:
#        print(i,"prime")
#     i+=1

n=int(input("enter the number:-"))
i=1
while i<=n:
    j=2
    count=0
    while j<i:
        if i%j==0:
            count=count+1
        j=j+1
    if count==0:
       print(i,"prime number")
    i+=1