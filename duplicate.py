a=[1,2,3,4,6,7,8,3,2,4,5,2,3,6]
i=0
li=[]
b=[]
while i<len(a):
    if a[i] not in li:
     li.append(a[i])
    else:
        b.append(a[i])
    i=i+1
print(b)
    