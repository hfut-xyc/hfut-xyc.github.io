# volatile

volatile 关键字只能用于修饰成员变量，表示

## 重排序

## 可见性
- volatile 修饰一个变量时，线程在写入变量时不会把值缓存在工作内存中，而是会把值刷新回主内存 
- 其他线程读取该共享变量时，会从主内存重新获取最新值，而不是使用当前线程的工作内存中的值。


