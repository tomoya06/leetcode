-- 自连接
# Write your MySQL query statement below
SELECT staff.Name AS Employee
FROM 
    (SELECT * FROM Employee WHERE ManagerId IS NOT NULL) staff LEFT JOIN
    Employee manager
ON
    staff.ManagerId = manager.Id
WHERE
    staff.Salary > manager.Salary