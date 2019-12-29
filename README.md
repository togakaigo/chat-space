# README


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false|
|group|references|null: false|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
<!-- |member|string|null: false, foreign_key: true| -->
|password|string|null: false|
### Association
<!-- - belongs_to :register
- belongs_to :member -->
 - has_many :users, through: :groups_users
 - has_many :groups_users
 - has_many :messages

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|


### Association
<!-- - belongs_to :name
- belongs_to :password -->
 - has_many :groups, through: :groups_users
 - has_many :groups_users
 - has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false |
|image|string|null: false|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users