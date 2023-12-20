# trust establishment

## access control

### password authentication

Client sends their ID and password to the server. We store the passwords passed through a one way function to avoid leaking information about passwords. We store passwords with a salt to avoid multi-target inversion attacks.

We need a secure communication channel.

### challenge-response

Server keeps pairs (ID, secret). The secret known by the server and client only.

1. client prompts the server with its ID
2. server sends a challenge with a random `c`
3. client runs `c` through a PRF seeded by the secret and returns it as a response
4. server also computes with PRF and secret and checks if the values match

We need very strong security of the database. Vulnerable to relay attacks.
