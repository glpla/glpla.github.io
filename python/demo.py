stus = ["张三", "李明四", "王五"]
# stus.sort(key=lambda x: len(x["name"]))
stus.sort(key=len)
print(stus)
