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

## authentication means

1. **what you know**: password
   - pro: always available
   - con: must address the human factor
2. **what you possess**: secure token
   - pro: tamper proof, can perform cryptographic operations
   - con: can be stolen, lost, forgotten
3. **what you are**: biometrics
   - pro: always available
   - con: fuzzy, threat to humankind, impossible to change
