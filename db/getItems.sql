SELECT *
FROM sellme_items s JOIN sellme_users u ON u.id = s.seller_id
WHERE u.id=$1;