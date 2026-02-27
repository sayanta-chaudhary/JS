create database if not exists college;
use college;

create table student (
    id int primary key,
    name varchar(20)
);
insert into student
(id, name)
values
(101, "adam"),
(102, "bob"),
(103, "casey");

create table course (
	  id int,
    course varchar(20)
);
insert into course
(id, course)
values
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer");

-- inner join
select *
from student as a
inner join course as b
on a.id = b.id;

-- left join
select *
from student as a
left join course as b
on a.id = b.id;

-- left exclusive join
select *
from student as a
left join course as b
on a.id = b.id
where b.id is null;

-- full exclusive join
select *
from student as a
left join course as b
on a.id = b.id
where b.id is null
union
select *
from student as a
right join course as b
on a.id = b.id
where a.id is null; 

-- SELECT a.id AS student_id, a.name, NULL AS course_id, NULL AS course
-- - both unmatched students and unmatched courses

-- self join
select a.name as manager_name, b.name -- main query
from employee as a
join employee as b
on a.id = b.manager_id;
