# GraphQL Schemas
## User
### Creating user
```graphql
mutation CreateUser($data: UserTypes!) {
  createUser(data: $data)
}
```
| Parameter | Type   |
| :-------- | :----- |
| `username`      | `String!` |
| `email`      | `String!` |
| `documentType`      | `String!` |
| `document`      | `String!` |

### Get User
```graphql
query GetUser($userId: ID!) {
  getUser(userId: $userId) {
    document
    documentType
    email
    username
  }
}
```
| Parameter | Type   |
| :-------- | :----- |
| `userId`      | `ID!` |

## Account
### Creating Account
```graphql
mutation CreateAccount($userId: ID!) {
  createAccount(userId: $userId)
}
```
| Parameter | Type   |
| :-------- | :----- |
| `userId`      | `ID!` |

### Deposit
```graphql
mutation Deposit($id: ID!, $amount: Float!) {
  deposit(_id: $id, amount: $amount)
}
```
| Parameter | Type   |
| :-------- | :----- |
| `id`      | `ID!` |
| `amount`  | `Float!` |

### Withdraw
```graphql
mutation Withdraw($id: ID!, $amount: Float!) {
  withdraw(_id: $id, amount: $amount)
}
```
| Parameter | Type   |
| :-------- | :----- |
| `id`      | `ID!` |
| `amount`  | `Float!` |

### Transaction
```graphql
mutation Transaction($data: AccountTypes!) {
  transaction(data: $data)
}
```
| Parameter | Type   |
| :-------- | :----- |
| `sender`      | `ID!` |
| `receiver`      | `ID!` |
| `amount`  | `Float!` |

## Extract
### Get Extract
```graphql
query GetExtract($accountId: ID!) {
  getExtract(accountId: $accountId) {
    account
    info
    name
    amount
    date
  }
}
```
| Parameter | Type   |
| :-------- | :----- |
| `accountId`      | `ID!` |

### Get item of extract by id
```graphql
query GetExtractById($itemId: ID!) {
  getExtractById(itemId: $itemId) {
    account
    amount
    date
    info
    name
  }
}
```
| Parameter | Type   |
| :-------- | :----- |
| `itemId`      | `ID!` |