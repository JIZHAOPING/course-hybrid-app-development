import express from 'express';
import bodyParser from "body-parser";
import { CANCELLED } from 'dns';
const app = express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){

    }
}
const courses = [
    new Course(1,"混合应用","http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",23,10),
    new Course(2,"javascript","http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",23,95),
    new Course(3,"H5与CSS","http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",4,91),
    new Course(4,"操作系统","http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130",7,398),
    new Course(5,"数据库原理","http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130",6,400),
    new Course(6,"数据结构","http://usercontent.edu2act.cn/media/team/17-09-15/ywftcr7DiN6JwRPEgUxPwB.jpg?imageView2/1/w/230/h/130",29,428),
    new Course(7,"面向程序设计","http://usercontent.edu2act.cn/media/team/17-09-14/wFmfsk8VswjGQtzimbK2EE.png?imageView2/1/w/230/h/130",48,394),
    new Course(8,"Web开发(二)","http://usercontent.edu2act.cn/media/team/17-09-11/kUUiGsFVtgGKKwBNamUSkG.png?imageView2/1/w/230/h/130",13,99)
]
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
// app.post('/api',(req,res)=>{
//     console.log(req.body);
//     res.json(courses);
// })

class Sourse{
    constructor(
        public id:number,
        public className:string,
        public images:string,
        public text:string,
        public classhour:number,
        public num:number
    ){}
}

const sourses = [
    new Sourse(1,"Github 开源之旅视频课程第一季:...","http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190"
    ,"完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评 "
    ,14,3734),
    new Sourse(2,"CSS基础"
    ,"http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190"
    ,"CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特",12,2315),
    new Sourse(3,"HTML5基础"
    ,"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190"
    ,"HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript AP",
    12,1310),
    new Sourse(4,"Selenium IDE WEB自动化","http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190"
    ,"上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基"
    ,17,3783),
    new Sourse(5,"扩展的ICONIX软件过程实践","http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190"
    ,"    ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开",12,2269),
    new Sourse(6,"Selenium IDE WEB自动化测","http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190"
    ,"上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基"
    ,11,3131,),
    new Sourse(7,"网页制作与开发","http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190"
    ,"     本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生"
    ,42,1572),
    new Sourse(8,"产品&amp;交互设计那些事儿","http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190"
    ,"本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解"
    ,5,1083)
]
app.get('/api/sourses',(req,res)=>{
    res.json(sourses);
});
app.get('/api/sourses/:id',(req,res)=>{
    res.json(sourses.find((ele)=>ele.id == req.params.id));
});

class Community{
    constructor(
        public id:number,
        public headpic:string,
        public images:string,
        public articleName:string,
        public article:string,
        public Name:string,
        public data:string,
        public reading:number,
        public common:number
    ){}
}
const communities = [
    new Community(1,"http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg"
    ,"WEB开发（二）—— 函数","（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写"
    ,"刘秀梅","2018-10-11 15:10",356,2),
    new Community(2,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg"
    ,"类定义关键字详解","JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性"
    ,"3-张馨元","2018-10-09 19:21",19,0),
    new Community(3,"http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg"
    ,"一个java文件中可包含多个main方法","一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法"
    ,"3-张馨元","2018-10-09 19:17",19,2),
    new Community(4,"http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg"
    ,"数据结构——线性表的经典应用","1. 一元多项式的表示和相加在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定"
    ,"杨伟斌","2018-10-08 14:28",25,0)
]
app.get('/api/communities',(req,res)=>{
    res.json(communities);
});
app.get('/api/communities/:id',(req,res)=>{
    res.json(communities.find((ele)=>ele.id == req.params.id));
});

class Video{
    constructor(
        public id:number,
        public name:string,
        public video:string,
        public text:string
    ){}
}
const videoes = [
    new Video(1,"基础知识&amp;实用工具","http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4","Github是什么？学习Github的理由，以及课程安排等"),
    new Video(2,"WEB前端开发","http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4","学习元素的边框的圆角、以及边框背景。"),
    new Video(3,"WEB前端开发","http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4","学习在html5中如何Geolocation实现地理位置定位"),
    new Video(4,"软件测试","http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"
    ,"首先，说明了本课程的前置课程是Selenium IDE WEB自动化测试入门（上），建议大家完成上篇课程的学习并亲自动手完成上篇课程中演示的几个自动化测试案例，再此基础上再学习本课程。其次，总结了上篇中大家已经学习的知识和技能，并预告中篇课程要讲解的6个主题。再次，强调了学习中的一些问题，包括如何在51CTO上查看高清课程视频的方法，以及在中篇课程中每节课程后面安排了作业任务环节。最后，回放演示了在线计算器网站的自动化测试案例。")
]
app.get('/api/videoes/:id',(req,res)=>{
    res.json(videoes.find((ele)=>ele.id == req.params.id));
});

class Shequ{
    constructor(
        public id:number,
        public imgs:string,
        public article:string
    ){}
}
const shequs = [
    new Shequ(1,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg"
    ,"（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </strong>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
    +"2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
    +"<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</strong>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
    +"在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
    +"在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
    +"(window))</strong>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</strong>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</strong>端，第二步是执行，"
    +"执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
    +"而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
    +"第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
    +"并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正"),
    new Shequ(2,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg"
    ,"JAVA类与对象（三）----类定义关键字详解static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。"
    +"注意：类中的实例变量是在创建对象时被初始化的，被static修饰的属性，也就是类变量，是在类加载时被创建并进行初始化，类加载的过程是进行一次。也就是类变量只会被创建一次。2.static修饰方法（静态方法），会使这个方法成为整个类所公有的方法，可以用类名.方法名访问。"
    +"注意：static修饰的方法，不直接能访问本类中的非静态(static)成员（包括方法和属性），本类的静态（static）方法可以访问本类的静态成员（包括方法和属性），可以调用静态方法。静态方法要慎重使用。在静态方法中不能出现this关键字。注意：父类中是静态方法，子类中不能覆盖"
    +"为非静态方法，在符合覆盖规则的前提下，在父子类中，父类中的静态方法可以被子类中的静态方法覆盖，但是没有多态。注意：父子类中，静态方法只能被静态方法覆盖，父子类中，非静态方法只能被非静态方法覆盖。3.static修饰初始代码块，这个代码块只在类加载时被执行一次。"
    +"可以用静态初始代码块初始化一个类。动态初始代码块，写在类体中的“{}”，这个代码块是在生成对象的初始化属性是运行。补充：类在什么时候会被加载？创建对象时会加载类，调用类中静态方法或访问静态属性也是会加载类的。在加载子类时必会先加载父类，类加载会有延迟加载原则，"
    +"只有在必须加载时才会加载final修饰符，可以修饰变量，方法，类1.final修饰变量被 fianl修饰的变量就会变成常量（常量应当大写），一旦赋值不能改变，fianl的常量不会有默认初始值，对于直接在初始化是赋值时final修饰符常和static修饰符一起使用。2.final修饰方法，被final修饰的方法将不能被其子类覆盖，"
    +"保持方法的稳定不能被覆盖。3.final修饰类，被final修饰的类将不能被继承。final类中的方法也都是final的。注意：</strong>（1）、final，不能用来修饰构造方法，在父类中如果有常量属性，在子类中使用常量属性时是不会进行父类的类加载。 （2）、不变模式，对象一旦创建属性就不会改变。用final修饰属性，"
    +"也用final修饰类（强不变模式），用final修饰属性（弱不变模式）。abstract（抽象）修饰符，可以修饰类和方法>1.abstract修饰类，会使这个类成为一个抽象类，这个类将不能生成对象实例，但可以做为对象变量声明的类型，也就是编译时类型，抽象类就像当于一类的半成品，需要子类继承并覆盖其中的抽象方法。"
    +"2.abstract修饰方法，</strong>会使这个方法变成抽象方法，也就是只有声明（定义）而没有实现，实现部分以代替。需要子类继承实现（覆盖）。注意：（1）、有抽象方法的类一定是抽象类。但是抽象类中不一定都是抽象方法，也可以全是具体方法。（2）、abstract修饰符在修饰类时必须放在类名前。"
    +" （3）、abstract修饰方法就是要求其子类覆盖（实现）这个方法。调用时可以以多态方式调用子类覆盖（实现）后的方法，也就是说抽象方法必须在其子类中实现，除非子类本身也是抽象类。注意：父类是抽象类，其中有抽象方法，那么子类继承父类，并把父类中的所有抽象方法都实现（覆盖）了，子类才有创建对象的实例的能力，"
    +"否则子类也必须是抽象类。抽象类中可以有构造方法，是子类在构造子类对象时需要调用的父类（抽象类）的构造方法。final和abstract，private和abstract，static和abstract，这些是不能放在一起的修饰符，因为 abstract修饰的方法是必须在其子类中实现（覆盖），才能以多态方式调用，以上修饰符在修饰方法时期子类都覆盖"
    +"不了这个方法，final是不可以覆 盖，private是不能够继承到子类，所以也就不能覆盖，static是可以覆盖的，但是在调用时会调用编译时类型的方法，因为调用的是父类的方法，而 父类的方法又是抽象的方法，又不能够调用，所以上的修饰符不能放在一起。抽象（abstract）方法代表了某种标准，定义标准，定义功能，在子类中"
    +"去实现功能（子类继承了父类并需要给出从父类继承的抽象方法的实现）。方法一时间想不到怎么被实现，或有意要子类去实现而定义某种标准，这个方法可以被定义为抽象。(abstract)public(公共访问权限)：这是一个宽松的访问控制级别，如果一个成员(包括成员变量、方法和构造器等)或者一个外部类使用public访问控制符修饰，那么这个成员或外部类就可以被所有类访问，"
    +"不管访问类和被访问类是否处于同一个包中，是否具有父子继承关系。private(当前类访问权限)：如果类里的一个成员(包括成员变量、方法和构造器等)使用private访问控制符来修饰，则这个成员只能在当前类的内部被访问。很显然，这个访问控制符用于修饰成员变量最合适，使用它来修饰成员变量就可以把成员变量隐藏在该类内部。protected(子类访问权限)："
    +"如果一个成员(包括成员变量、方法和构造器等)使用protected访问控制符修饰，那么这个成员既可以被同一个包中的其他类访问，也可以被不同包中的子类访问。在通常情况下，如果使用protected来修饰一个方法，通常是希望其子类来重写这个方法。default(包访问权限)：如果类里的一个成员(包括成员变量、方法和构造器等)或者一个外部类不使用任何访问控制符修饰，"
    +"就称它是包访问权限，default访问控制的成员或外部类可以被相同包下的其他类访问。转载至http://www.cnblogs.com/scf141592/p/5721093.html"),
    new Shequ(3,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg"
    ,"JAVA类与对象（三）----类定义关键字详解static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。"
    +"注意：类中的实例变量是在创建对象时被初始化的，被static修饰的属性，也就是类变量，是在类加载时被创建并进行初始化，类加载的过程是进行一次。也就是类变量只会被创建一次。2.static修饰方法（静态方法），会使这个方法成为整个类所公有的方法，可以用类名.方法名访问。"
    +"注意：static修饰的方法，不直接能访问本类中的非静态(static)成员（包括方法和属性），本类的静态（static）方法可以访问本类的静态成员（包括方法和属性），可以调用静态方法。静态方法要慎重使用。在静态方法中不能出现this关键字。注意：父类中是静态方法，子类中不能覆盖"
    +"为非静态方法，在符合覆盖规则的前提下，在父子类中，父类中的静态方法可以被子类中的静态方法覆盖，但是没有多态。注意：父子类中，静态方法只能被静态方法覆盖，父子类中，非静态方法只能被非静态方法覆盖。3.static修饰初始代码块，这个代码块只在类加载时被执行一次。"
    +"可以用静态初始代码块初始化一个类。动态初始代码块，写在类体中的“{}”，这个代码块是在生成对象的初始化属性是运行。补充：类在什么时候会被加载？创建对象时会加载类，调用类中静态方法或访问静态属性也是会加载类的。在加载子类时必会先加载父类，类加载会有延迟加载原则，"
    +"只有在必须加载时才会加载final修饰符，可以修饰变量，方法，类1.final修饰变量被 fianl修饰的变量就会变成常量（常量应当大写），一旦赋值不能改变，fianl的常量不会有默认初始值，对于直接在初始化是赋值时final修饰符常和static修饰符一起使用。2.final修饰方法，被final修饰的方法将不能被其子类覆盖，"
    +"保持方法的稳定不能被覆盖。3.final修饰类，被final修饰的类将不能被继承。final类中的方法也都是final的。注意：</strong>（1）、final，不能用来修饰构造方法，在父类中如果有常量属性，在子类中使用常量属性时是不会进行父类的类加载。 （2）、不变模式，对象一旦创建属性就不会改变。用final修饰属性，"
    +"也用final修饰类（强不变模式），用final修饰属性（弱不变模式）。abstract（抽象）修饰符，可以修饰类和方法>1.abstract修饰类，会使这个类成为一个抽象类，这个类将不能生成对象实例，但可以做为对象变量声明的类型，也就是编译时类型，抽象类就像当于一类的半成品，需要子类继承并覆盖其中的抽象方法。"
    +"2.abstract修饰方法，</strong>会使这个方法变成抽象方法，也就是只有声明（定义）而没有实现，实现部分以代替。需要子类继承实现（覆盖）。注意：（1）、有抽象方法的类一定是抽象类。但是抽象类中不一定都是抽象方法，也可以全是具体方法。（2）、abstract修饰符在修饰类时必须放在类名前。"
    +" （3）、abstract修饰方法就是要求其子类覆盖（实现）这个方法。调用时可以以多态方式调用子类覆盖（实现）后的方法，也就是说抽象方法必须在其子类中实现，除非子类本身也是抽象类。注意：父类是抽象类，其中有抽象方法，那么子类继承父类，并把父类中的所有抽象方法都实现（覆盖）了，子类才有创建对象的实例的能力，"
    +"否则子类也必须是抽象类。抽象类中可以有构造方法，是子类在构造子类对象时需要调用的父类（抽象类）的构造方法。final和abstract，private和abstract，static和abstract，这些是不能放在一起的修饰符，因为 abstract修饰的方法是必须在其子类中实现（覆盖），才能以多态方式调用，以上修饰符在修饰方法时期子类都覆盖"
    +"不了这个方法，final是不可以覆 盖，private是不能够继承到子类，所以也就不能覆盖，static是可以覆盖的，但是在调用时会调用编译时类型的方法，因为调用的是父类的方法，而 父类的方法又是抽象的方法，又不能够调用，所以上的修饰符不能放在一起。抽象（abstract）方法代表了某种标准，定义标准，定义功能，在子类中"
    +"去实现功能（子类继承了父类并需要给出从父类继承的抽象方法的实现）。方法一时间想不到怎么被实现，或有意要子类去实现而定义某种标准，这个方法可以被定义为抽象。(abstract)public(公共访问权限)：这是一个宽松的访问控制级别，如果一个成员(包括成员变量、方法和构造器等)或者一个外部类使用public访问控制符修饰，那么这个成员或外部类就可以被所有类访问，"
    +"不管访问类和被访问类是否处于同一个包中，是否具有父子继承关系。private(当前类访问权限)：如果类里的一个成员(包括成员变量、方法和构造器等)使用private访问控制符来修饰，则这个成员只能在当前类的内部被访问。很显然，这个访问控制符用于修饰成员变量最合适，使用它来修饰成员变量就可以把成员变量隐藏在该类内部。protected(子类访问权限)："
    +"如果一个成员(包括成员变量、方法和构造器等)使用protected访问控制符修饰，那么这个成员既可以被同一个包中的其他类访问，也可以被不同包中的子类访问。在通常情况下，如果使用protected来修饰一个方法，通常是希望其子类来重写这个方法。default(包访问权限)：如果类里的一个成员(包括成员变量、方法和构造器等)或者一个外部类不使用任何访问控制符修饰，"
    +"就称它是包访问权限，default访问控制的成员或外部类可以被相同包下的其他类访问。转载至http://www.cnblogs.com/scf141592/p/5721093.html"),
    new Shequ(4,"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg"
    ,"（一）函数三要素</p><p>函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用</p><p>函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。1．函数声明形式注： 不需要在函数声明的后面添加一个分号，并且添加一个分号完全是浪费性能。大括号是函数声明的必须的语法元素之一，同时它也是一个复合语句，可以用来组织语句，右侧的花括弧( </strong>} <strong>)本身就意味着复合语句的结束，所以不用添加分号，如果添加分号的话，就相当于重新建立了一个空语句。"
    +"2．函数表达式形式所以一般写成下列形式：注： 函数表达式和声明变量原理相同，只不过变量的值是一个函数对象，这个时候就建议使用分号结尾。3．匿名函数匿名函数需要立即调用或者立即赋值给一个变量，上述代码为立即调用，而函数表达式为匿名函数立即赋值给一个变量的形式，事件也是。（三）匿名函数匿名函数为什么要加一对小括号呢？这样使用有什么好处么？1．在function前面加！、+、 - 甚至是逗号等到都可以起到函数定义后立即执行的效果，而（）、！、+、-、=等运算符，"
    +"<strong>都将函数声明转换成函数表达式，消除了javascript引擎识别函数表达式和函数声明的歧义</strong>，告诉javascript引擎这是一个函数表达式，不是函数声明，可以在后面加括号，并立即执行函数的代码。2．函数是有返回值的，返回我们指定的值或者undefined。函数的返回值我们可能需要在后续中使用。在函数前面加上不同的运算符，这些运算符还会和函数的返回值进行运算，有时造成不必要的麻烦。"
    +"在这些运算符中加括号是最安全的做法，因为它不会改变函数的返回值。至此，我们回答了第一个问题。接下来我们回答第二个问题：匿名函数的好处。javascript中没用私有作用域的概念，在ES5中只用全局作用域和局部作用域"
    +"在函数内通过var关键字声明的变量为局部变量。如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉。那么我们可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突，俗称“匿名包裹器”或“命名空间”。</p><p>jQuery使用的就是这种方法，将jQuery代码包裹在<strong>&nbsp;( function (window,undefined){…jquery代码…} "
    +"(window))</strong>中，在全局作用域中调用jQuery代码时，可以达到保护jQuery内部变量的作用。（四）函数声明与函数表达式通过前面代码我们知道函数声明与函数表达式两种定义方式的调用形式是一样的， 那么这两种定义方式有什么不同呢？1．变量提升首先JavaScript引擎在读取JavaScript代码时会进行两个步骤，第一个步骤是解释，第二个步骤是<strong>执行</strong>。&nbsp;<br>所谓解释就是会先通篇扫描所有的JavaScript代码，然后把<strong>所有声明提升到顶</strong>端，第二步是执行，"
    +"执行就是操作一类的。</p><p><strong>所有声明提升到顶端的意思是把变量声明提升到变量作用域（全局或者函数）的顶端。量提升只有变量声明提升，"
    +"而变量赋值留在原地。所以书写代码要养成好的习惯，先声明后使用。特别的注意函数声明和函数表达式的不同点。2．关于return语句我们知道return语句有两个作用，第一个是返回指定的值，第二个是结束函数的执行，写在return语句后面的代码不会执行。另外了解到JavaScript代码运行分两步："
    +"第一是提升变量，第二是执行JavaScript语句。这两个知识点结合在一起，我们看下列代码：调用add(1,2) 语句执行结果为：我们看到add函数运行时没有报错，"
    +"并且只有第一个console.log（c）执行，且输出为undefined。<br>结果分析：因为第一步为变量提升，所以相当于为如下代码：在第二步add函数代码运行到第一个console.log(c)时，变量c已经声明但是没有赋值，所以输出undefined，而return语句后面的c=5;console.log(c)语句不会被执行。注：如有疑问，欢迎指正")
]
app.get('/api/shequs/:id',(req,res)=>{
    res.json(shequs.find((ele)=>ele.id == req.params.id));
});

class Detail{
    constructor(
        public id:number,
        public renwu:string,
        public name:string,
        public time:string,
        public img:string
    ){}
}
const details = [
    new Detail(1,"任务二 -- js基础练习与应用","刘冠军","2018-09-30","http://usercontent.edu2act.cn/media/userheader/17-09-12/DktTc6ww3u396hJYsG4dMP.jpg?imageView2/1/w/256/h/256"),
    new Detail(2,"第一次作业","金梦","2018-09-29","http://usercontent.edu2act.cn/media/userheader/18-09-12/LvovN2X7fQ84aYwbkYHhxd.jpg?imageView2/1/w/256/h/256"),
    new Detail(3,"WEB开发任务04","刘冠军","2018-10-20","http://usercontent.edu2act.cn/media/userheader/17-09-12/DktTc6ww3u396hJYsG4dMP.jpg?imageView2/1/w/256/h/256"),
    new Detail(4,"任务三 按要求写出测试总结报告","刘兴梅","2018-09-19","http://usercontent.edu2act.cn/media/userheader/18-08-20/6LvBxwqVUYyTFNb3oP79pd.png?imageView2/1/w/256/h/256")
]
app.get('/api/details/:id',(req,res)=>{
    res.json(details.find((ele)=>ele.id == req.params.id));
})

app.listen(8000);