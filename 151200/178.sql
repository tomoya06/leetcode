# Write your MySQL query statement below
-- MYSQL变量:
-- <> 不等于 := 赋值 @name 声明变量
-- # SELECT 
-- #     Score,
-- #     (SELECT COUNT(DISTINCT Score) FROM Scores WHERE Score >= s.Score) AS Rank
-- # FROM Scores s
-- # ORDER BY Score DESC
SELECT
    Score,
    (@rank := @rank + (@prev <> (@prev := Score))) Rank
FROM
    Scores,
    (SELECT @rank := 0, @prev := -1) Init
ORDER BY
    Score DESC