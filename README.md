# README


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|group|references|null: truth|
|user|references|null: truth|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: truth|
<!-- |member|string|null: false, foreign_key: true| -->


### Association
<!-- - belongs_to :register
- belongs_to :member -->
 - has_many :users, through: :groups_users
 - has_many :groups_users
 - has_many :messages


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: truth|


### Association
<!-- - belongs_to :name
- belongs_to :password -->
 - has_many :groups, through: :groups_users
 - has_many :groups_users
 - has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: truth|
|image|string|null: truth|
|user_id|references|null: false|
|group_id|references|null: false|

### Association
- belongs_to :group
- belongs_to :user
