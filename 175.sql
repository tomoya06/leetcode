# Write your MySQL query statement below
SELECT
    Person.FirstName as FirstName,
    Person.LastName as LastName,
    Address.City as City,
    Address.State as State
FROM Person
LEFT JOIN Address
ON Person.PersonId = Address.PersonId