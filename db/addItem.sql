INSERT INTO sellme_items
    (name,seller_id,description,picture,price,phone,item_adress)
VALUES($1, $2, $3, $4, $5, $6, $7)
RETURNING *