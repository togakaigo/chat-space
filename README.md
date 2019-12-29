# README


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|AKB|string|null: false, foreign_key: true|
|NMB|string|null: false, foreign_key: true|


### Association
- belongs_to :AKB
- belongs_to :NMB

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|age|string|null: false, foreign_key: true|


### Association
- belongs_to :name
- belongs_to :age


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|word|string|null: false, foreign_key: true|
|word|string|null: false, foreign_key: true|

### Association
- belongs_to :word
- belongs_to :word