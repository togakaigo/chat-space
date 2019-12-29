# README


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|system|string|null: false, foreign_key: true|
|mass|string|null: false, foreign_key: true|


### Association
- belongs_to :system
- belongs_to :mass

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|client|string|null: false, foreign_key: true|
|human|string|null: false, foreign_key: true|


### Association
- belongs_to :client
- belongs_to :human


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|word|string|null: false, foreign_key: true|
|letter|string|null: false, foreign_key: true|

### Association
- belongs_to :word
- belongs_to :letter