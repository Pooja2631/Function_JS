num=int(input("enter the num....."))
i=0
while i<num:
    if num%10==0:
        num=num//10
    i=i+1
print(num)
