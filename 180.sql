-- # Write your MySQL query statement below
-- 编写一个 SQL 查询，查找所有至少连续出现三次的数字。
SELECT 
    DISTINCT Num AS ConsecutiveNums
FROM 
(
    SELECT
        Num,
        CASE WHEN (@prev <> (@prev := Num)) THEN (@cnt := 1)
        ELSE (@cnt := @cnt + 1)
        END AS Cnt
    FROM 
        Logs,
        (SELECT @prev := -1, @cnt := 1) Init    
) CntLogs
WHERE Cnt >= 3