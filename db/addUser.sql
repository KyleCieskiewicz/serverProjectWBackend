INSERT INTO users (proteinbase, vegetable, fruit) VALUES ($1, $2, $3)
RETURNING *;