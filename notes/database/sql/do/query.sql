create database if not exists college;
use college;

create table student (
  	rollno int primary key auto_increment,
    name varchar(100),
    marks int not null,
    grade varchar(2),
    city varchar(20)
);

insert into student
(name, marks, grade, city)
values 
("bot", 78, "C", "Pune"),
("piya", 96, "A+", "Mumbai"),
("chetan", 85, "B", "Mumbai"),
("sayanta", "93", "A", "Delhi"),
("samuyal", "12", "F", "Delhi"),
("farha", "82", "B", "Delhi");

select distinct city from student;
select * from student where marks > 80 and city = "mumbai";
select * from student where marks between 80 and 90;
select * from student where city in ("delhi", "mumbai");
select * from student where city not in ("delhi", "mumbai");
select * from student order by marks desc limit 3; -- top 3
select city, count(name) from student group by city;
select city, count(rollno) from student group by city having max(marks) > 90;
update student set marks = "12" where rollno = "102";
delete from student where marks < 33; select * from student;
